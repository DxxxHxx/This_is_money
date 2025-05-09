import { useState } from 'react';
import MenuWithUnderbar from '@/components/myScrap/MenuWithUnderbar';
import useMyScrap from '@/hooks/myScrap/useMyScrap';
import EmptyState from '@/components/myScrap/EmptyState';
import ScrapedContents from '@/components/myScrap/content/ScrapedContents';
import ScrapedTerms from '@/components/myScrap/keyword/ScrapedTerms';
import DesktopMenu from '@/components/myScrap/DesktopMenu';
import EmptyTerm from '@/assets/this_is_money_imgs/img_webp/image_for_emptyword.webp';
import EmptyContent from '@/assets/this_is_money_imgs/img_webp/image_for_emptyscrap.webp';
import useImagePreloader from '@/hooks/common/useImagePreloader';
import useTimeOut from '@/hooks/common/useTimeOut';

export default function MyScrap() {
  const { activeMenu, setActiveMenu, contentList, termsList } = useMyScrap();
  const [isDelayedLoading, setIsDelayedLoading] = useState(true);

  useImagePreloader([EmptyTerm, EmptyContent]);
  useTimeOut(() => setIsDelayedLoading(false), 100);

  if (isDelayedLoading) return null;

  return (
    <section className='mx-auto mt-10 flex w-full max-w-[1182px] flex-col gap-y-5 px-4 md:px-6 desktop:px-0'>
      <h1 className='text-[22px] font-medium text-custom-black md:hidden'>MY 스크랩</h1>
      <hr className='hidden h-[1px] w-[1182px] bg-custom-gray-300 desktop:block' />
      <div className='flex w-full flex-col items-center desktop:flex-row'>
        <MenuWithUnderbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <DesktopMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        {activeMenu === '콘텐츠' ? (
          contentList.length === 0 ? (
            <EmptyState activeMenu={activeMenu} />
          ) : (
            <ScrapedContents contentList={contentList} />
          )
        ) : activeMenu === '단어장' ? (
          termsList.length === 0 ? (
            <EmptyState activeMenu={activeMenu} />
          ) : (
            <ScrapedTerms termsList={termsList} />
          )
        ) : null}
      </div>
    </section>
  );
}
