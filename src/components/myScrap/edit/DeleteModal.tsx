import useMyScrapStore from '@/store/useMyScrapStore';
import { myScrapMenu } from '@/types/types';

export default function DeleteModal({
  isOpen,
  onDelete,
  activeMenu,
}: {
  isOpen: boolean;
  onDelete: (activeMenu: myScrapMenu) => void;
  activeMenu: myScrapMenu;
}) {
  const setIsDelModalOpen = useMyScrapStore((state) => state.setIsDelModalOpen);
  const setSelectedIdList = useMyScrapStore((state) => state.setSelectedIdList);
  const setIsAllChecked = useMyScrapStore((state) => state.setIsAllChecked);
  const text = activeMenu === '단어장' ? '단어' : activeMenu;

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60'>
      <div className='flex h-[100px] w-[343px] flex-col items-center gap-y-5 rounded-[10px] bg-custom-gray-lighter p-4 text-xs'>
        <p className='h-[18px] leading-[18px] text-custom-gray-dark'>선택한 {text}를 삭제할까요?</p>
        <div className='flex h-[30px] gap-x-2'>
          <button
            type='button'
            onClick={() => {
              setIsDelModalOpen(false);
              setSelectedIdList([]);
              setIsAllChecked(false);
            }}
            className='h-full w-[148px] rounded bg-custom-gray-300 text-custom-gray-600 hover:bg-hover-30 hover:text-custom-gray-600'
          >
            취소하기
          </button>
          <button
            type='button'
            onClick={() => onDelete(activeMenu)}
            className='hove: h-full w-[148px] rounded bg-custom-gray-dark text-primary hover:bg-hover-80 hover:text-green-hover'
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}
