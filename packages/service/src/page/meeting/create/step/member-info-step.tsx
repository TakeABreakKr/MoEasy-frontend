import { useState } from 'react';
import clsx from 'clsx';

import { mockmembers } from '@/entities/member/api/mock';

import { Button } from '@moeasy/storybook/ui/button';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { SearchIcon } from '@moeasy/storybook/ui/icon';
import { Input } from '@moeasy/storybook/ui/input';

import { StepProps } from '../creating-step-form';

import * as styles from './member.css';

type MemberStepProps = StepProps & {
  toggleLimitDisabled: () => void;
};

export function MemberInfoStep({ formData, dispatch, toggleLimitDisabled }: MemberStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectMember = (member: string) => {
    setSelectedList((prev) => (prev.includes(member) ? prev.filter((m) => m !== member) : [...prev, member]));
  };

  const handleRemoveMember = (member: string) => {
    setSelectedMembers((prev) => prev.filter((m) => m !== member));
  };

  const handleConfirmSelection = () => {
    setSelectedMembers(selectedList);
    setIsModalOpen(false);
  };

  const filteredMembers = mockmembers.filter((member) =>
    member.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label}>
        <span>몇 명까지 참여할 수 있나요?</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Input
            name="limit"
            placeholder="모임 인원을 입력해주세요"
            value={formData.limit}
            onValueChange={(limit) => dispatch({ limit })}
            disabled={formData.limitDisabled}
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
      {/* TODO: 선택된 멤버 보여주는 ui 추가(모달창 내에서) */}
      {/* TODO: 모임원 많이 선택되었을 시 | 스크롤 추가 | 제한 추가 */}
      {/* TODO: css 파일 수정 */}
      <label className={formStyles.label}>
        <span>모임원 추가</span>
        <div className={formStyles.input}>
          <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
            <ModalTrigger type="button" onClick={() => setIsModalOpen(true)} className={styles.searchButton}>
              {'모임원을 선택해주세요'}
              <SearchIcon />
            </ModalTrigger>
            <ModalPortal>
              <ModalOverlay className={modalStyles.overlay} onClick={() => setIsModalOpen(false)} />
              <ModalContent
                className={clsx(modalStyles.container({ size: 'medium', padding: 'small' }), styles.centeredModal)}
              >
                <div className={styles.modalHeader}>
                  <ModalClose asChild>
                    <button className={styles.closeButton}>✕</button>
                  </ModalClose>
                  <h1 className={styles.modalTitle}>모임원 추가</h1>
                  <Button type="button" onClick={handleConfirmSelection} className={styles.confirmButton}>
                    확인
                  </Button>
                </div>
                <div className={styles.searchInputWrapper}>
                  <Input
                    placeholder="닉네임, 유저코드 검색"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={formStyles.input}
                  />
                </div>
                <div className={styles.memberListWrapper}>
                  <p> 내친구</p>
                  <ul className={styles.memberListVertical}>
                    {filteredMembers.map((member) => {
                      const isSelected = selectedList.includes(member.username);
                      return (
                        <li
                          key={member.memberId}
                          className={styles.memberItemVertical}
                          onClick={() => handleSelectMember(member.username)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                            <img src={member.thumbnail} alt={member.username} className={styles.memberThumbnail} />
                            <span className={styles.memberName}>{member.username}</span>
                          </div>
                          <div className={clsx(styles.circleCheck, isSelected ? styles.selected : styles.unselected)}>
                            ✓
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ModalContent>
            </ModalPortal>
          </Modal>
        </div>
      </label>
      <div className={styles.memberList}>
        {selectedMembers.map((member) => (
          <div key={member} className={styles.memberItem}>
            <span>{member}</span>
            <button type="button" className={styles.removeButton} onClick={() => handleRemoveMember(member)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
