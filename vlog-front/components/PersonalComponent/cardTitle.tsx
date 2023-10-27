'use client'

interface vTitle{
    title:string
}

export const MainTitle = ({title}:vTitle) => (
    <>
      <h4 className="text-3xl font-bold min-h-[75px] max-h-[75px] truncate-height">{title}</h4>
      <style jsx>{`
        .truncate-height {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </>
  );

  export const MainSubTitle = ({title}:vTitle) => (
    <>
      <h4 className="text-sm font-bold min-h-[40px] max-h-[40px] truncate-height">{title}</h4>
      <style jsx>{`
        .truncate-height {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </>
  );  