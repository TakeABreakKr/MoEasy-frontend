import { useState } from 'react';
import { Input } from '@moeasy/storybook/ui/input';
import { Button } from '@moeasy/storybook/ui/button';
import { StepProps } from '../creating-step-form';
import { SearchIcon } from '@moeasy/storybook/ui/icon';
import { List, ListContent, ListFooter } from '@moeasy/storybook/ui/list';
import * as styles from './member.css';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

type MemberStepProps = StepProps & {
  toggleLimitDisabled: () => void;
};

export function MemberInfoStep({ formData, dispatch, toggleLimitDisabled }: MemberStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const handleSelectMember = (selectedList: any[]) => {
    const newMembers = selectedList.map((member) => member.name);
    setSelectedMembers((prev) => [...new Set([...prev, ...newMembers])]);
    setIsModalOpen(false);
  };

  const handleRemoveMember = (member: string) => {
    setSelectedMembers((prev) => prev.filter((m) => m !== member));
  };

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
            {selectedMembers.length > 0 ? selectedMembers.join(', ') : '모임원을 선택해주세요'}
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
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>모임원 선택</h3>
            <List
              list={[
                { avatar: 'https://placehold.co/30', id: '0', name: 'Alex' },
                { avatar: 'https://placehold.co/30', id: '1', name: 'Bob' },
                { avatar: 'https://placehold.co/30', id: '2', name: 'Charlie' },
                { avatar: 'https://placehold.co/30', id: '3', name: 'David' },
                { avatar: 'https://placehold.co/30', id: '4', name: 'Eve' },
              ]}
              close={handleSelectMember}
            >
              <ListContent />
              <ListFooter>선택 완료</ListFooter>
            </List>
            {/* FIXME: 선택 완료 클릭 시 submit 기본 동작 방지 수정 < ListFooter ui 컴포넌트를 수정? */}
          </div>
        </div>
      )}
    </div>
  );
}
