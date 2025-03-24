import { useState } from 'react';
import { Input } from '@moeasy/storybook/ui/input';
import { Button } from '@moeasy/storybook/ui/button';
import { StepProps } from '../creating-step-form';
import { SearchIcon } from '@moeasy/storybook/ui/icon';
import { Modal, ModalContent, ModalOverlay } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import * as styles from './member.css';

type MemberStepProps = StepProps & {
  toggleLimitDisabled: () => void;
};

export function MemberInfoStep({ formData, dispatch, toggleLimitDisabled }: MemberStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const handleSelectMember = (member: string) => {
    setSelectedList((prev) => [...new Set([...prev, member])]);
  };

  const handleRemoveMember = (member: string) => {
    setSelectedMembers((prev) => prev.filter((m) => m !== member));
  };

  const handleConfirmSelection = () => {
    setSelectedMembers((prev) => [...new Set([...prev, ...selectedList])]);
    setIsModalOpen(false);
  };
  // TODO: 선택된 멤버 처리 어떻게 할지... 현재는 setSelectedList를 초기화 하지 않음으로써 모달을 다시 열어도 이미 선택된 멤버가 보임 하지만 삭제 시에 반영이 안 됨
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

      <label className={formStyles.label}>
        <span>모임원 추가</span>
        <div className={formStyles.input}>
          <button type="button" onClick={() => setIsModalOpen(true)} className={styles.searchButton}>
            {'모임원을 선택해주세요'}
            <SearchIcon />
          </button>
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
      {isModalOpen && (
        <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
          <ModalOverlay className={modalStyles.overlay} onClick={() => setIsModalOpen(false)} />
          <ModalContent
            className={modalStyles.container({ size: 'medium', padding: 'small' })}
            style={{ zIndex: 100, position: 'fixed' }}
          >
            <h3 className={modalStyles.popupTitle}>모임원 선택</h3>
            <ul className={modalStyles.popupContent}>
              {['김도연', '김만중', '진명서', '윤한결', '전수진', '최성용', '조하린'].map((member) => (
                <li
                  key={member}
                  className={modalStyles.popupDesc}
                  onClick={() => handleSelectMember(member)}
                  style={{
                    backgroundColor: selectedList.includes(member) ? '#ddd' : 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  {member}
                </li>
              ))}
            </ul>
            <Button type="button" onClick={handleConfirmSelection} className={modalStyles.header}>
              선택 완료
            </Button>
          </ModalContent>
        </Modal>
        // TODO: 모달 디자인 수정, 리스트 출력 기능 수정
      )}
    </div>
  );
}
