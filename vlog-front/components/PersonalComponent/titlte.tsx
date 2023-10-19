'use client'

interface vTitle{
    title:string
}

export const CardTitle = ({title}:vTitle) => (
    <>
      <h4 className="text-sm pl-2 font-bold min-h-[40px] max-h-[40px] truncate-height">{title}</h4>
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