import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { mockmembers } from '@/entities/member/api/mock';

import { Button } from '@moeasy/storybook/ui/button';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { SearchIcon } from '@moeasy/storybook/ui/icon';
import { Input } from '@moeasy/storybook/ui/input';
import { Label } from '@moeasy/storybook/ui/label/label';

import { StepProps } from '../creating-step-form';

import * as styles from './member.css';

type MemberStepProps = StepProps & {
  toggleLimitDisabled: () => void;
};

export function MemberInfoStep({ formData, dispatch, toggleLimitDisabled }: MemberStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const isTooManySelected =
    typeof formData.limit === 'number' && selectedList.length >= formData.limit && formData.limit !== 0;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const viewingSkill = 7;
  const TOTAL_SLIDES = Math.max(0, Math.ceil(selectedList.length / viewingSkill) - 1);
  const firstSlide = 0;

  const handleClickNextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(firstSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleClickPrevSlide = () => {
    if (currentSlide === firstSlide) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    if (isModalOpen) {
      setSelectedList(formData.members || []);
    }
  }, [isModalOpen]);

  const handleSelectMember = (member: string) => {
    const isSelected = selectedList.includes(member);
    const limit = formData.limit === '' ? 9999 : Number(formData.limit);
    if (isSelected) {
      setSelectedList((prev) => prev.filter((m) => m !== member));
    } else if (selectedList.length < limit) {
      setSelectedList((prev) => [...prev, member]);
    }
  };

  const handleRemoveMember = (members: string) => {
    dispatch({
      members: formData.members.filter((m) => m !== members),
    });
  };

  const handleConfirmSelection = () => {
    dispatch({ members: selectedList });
    setIsModalOpen(false);
  };

  const filteredMembers = mockmembers.filter((member) =>
    member.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.labelWrapper}>
        <div className={formStyles.label}>몇 명까지 참여할 수 있나요?</div>
        <div className={styles.limitInput}>
          <Input
            name="limit"
            placeholder="모임 인원을 입력해주세요"
            className={formStyles.input}
            type="number"
            value={formData.limit}
            onValueChange={(limit) => dispatch({ limit })}
            disabled={formData.limitDisabled}
            min={1}
          />
          <Button
            type="button"
            variant={formData.limitDisabled ? 'primary' : 'secondary'}
            size="small"
            rounded="medium"
            onClick={toggleLimitDisabled}
          >
            제한 없음
          </Button>
        </div>
      </label>
      <label className={formStyles.labelWrapper}>
        <div className={formStyles.label}>모임원 추가</div>
        <div className={formStyles.input}>
          <Modal open={isModalOpen} onOpenChange={setIsModalOpen} isOutsideClose>
            <ModalTrigger type="button" onClick={() => setIsModalOpen(true)} className={styles.searchButton}>
              {'모임원을 선택해주세요'}
              <SearchIcon />
            </ModalTrigger>
            <ModalPortal>
              <ModalOverlay className={modalStyles.overlay}>
                <ModalContent
                  className={clsx(modalStyles.container({ size: 'medium', padding: 'small' }), styles.centeredModal)}
                >
                  <div className={styles.modalHeader}>
                    <ModalClose asChild>
                      <button className={styles.closeButton}>✕</button>
                    </ModalClose>
                    <h1 className={styles.modalTitle}>모임원 추가</h1>
                    <button type="button" onClick={handleConfirmSelection} className={styles.confirmButton}>
                      확인
                    </button>
                  </div>
                  <div className={styles.selectedMemberSection} data-visible={selectedList.length > 0}>
                    {selectedList.length > 0 && (
                      <>
                        <div className={styles.selectedCountWrapper}>
                          <div className={styles.selectedCount}>
                            {selectedList.length}/{formData.limit}명
                            {isTooManySelected && <Label variant="error">최대 인원까지 선택하셨습니다.</Label>}
                          </div>
                          <div className={styles.angleButtons}>
                            {selectedList.length > viewingSkill && (
                              <>
                                <button type="button" onClick={handleClickPrevSlide} className={styles.angleButton}>
                                  {'<'}
                                </button>
                                <button type="button" onClick={handleClickNextSlide} className={styles.angleButton}>
                                  {'>'}
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={styles.selectedMemberWrapper}>
                          <div ref={slideRef} className={styles.selectedMemberList}>
                            {selectedList.map((name) => {
                              const member = mockmembers.find((m) => m.username === name);
                              return (
                                <div key={name} className={styles.selectedMember}>
                                  <img src={member?.thumbnail} alt={name} className={styles.selectedThumbnail} />
                                  <button
                                    type="button"
                                    className={styles.removeSelectedButton}
                                    onClick={() => handleSelectMember(name)}
                                  >
                                    ×
                                  </button>
                                  {member?.username}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className={styles.searchInputWrapper}>
                    <Input
                      placeholder="닉네임, 유저코드 검색"
                      value={searchQuery}
                      onValueChange={(value) => setSearchQuery(value)}
                      className={formStyles.input}
                    />
                  </div>
                  <div className={styles.memberListWrapper}>
                    {filteredMembers.length === 0 && searchQuery ? (
                      <div className={styles.noResult}>검색된 결과가 없습니다</div>
                    ) : (
                      <>
                        <p>내친구</p>
                        <ul className={styles.memberListVertical}>
                          {filteredMembers.map((member) => {
                            const isSelected = selectedList.includes(member.username);
                            return (
                              <li
                                key={member.memberId}
                                className={styles.memberItemVertical}
                                onClick={() => handleSelectMember(member.username)}
                              >
                                <div className={styles.memberInfo}>
                                  <img
                                    src={member.thumbnail}
                                    alt={member.username}
                                    className={styles.memberThumbnail}
                                  />
                                  <span className={styles.memberName}>{member.username}</span>
                                </div>
                                <div
                                  className={clsx(styles.circleCheck, isSelected ? styles.selected : styles.unselected)}
                                >
                                  ✓
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}
                  </div>
                </ModalContent>
              </ModalOverlay>
            </ModalPortal>
          </Modal>
        </div>
      </label>
      <div className={styles.memberList}>
        {formData.members.length > 0 && (
          <>
            <div className={styles.memberNumberItem}>{formData.members.length}명</div>
            {formData.members.map((member) => (
              <div key={member} className={styles.memberItem}>
                <span>{member}</span>
                <button type="button" className={styles.removeButton} onClick={() => handleRemoveMember(member)}>
                  x
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <div className={formStyles.labelWrapper}>
        {formData.members.length > 0 && (
          <div className={styles.publicYnSection}>
            <p className={styles.publicYnQuestion}>모임을 비공개 할까요?</p>
            <div className={styles.publicYnButtons}>
              <Button
                type="button"
                onClick={() => dispatch({ publicYn: false })}
                className={clsx(styles.publicYnButton, !formData.publicYn && styles.publicSelected)}
              >
                아니오
              </Button>
              <Button
                type="button"
                onClick={() => dispatch({ publicYn: true })}
                className={clsx(styles.publicYnButton, formData.publicYn && styles.publicSelected)}
              >
                네
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
