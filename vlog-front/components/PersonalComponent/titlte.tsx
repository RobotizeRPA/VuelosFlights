'use client'

interface vTitle{
    title:string
}

export const CardTitle = ({title}:vTitle) => (
    <>
      <h4 className="text-sm py-2 pl-2 font-bold min-h-50 max-h-50 truncate-height">{title}</h4>
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


  export const CardAdminCMSTitle = ({title}:{title:string}) => (
    <>
      <h4 className="text-sm truncate-height font-semibold cursor-pointer">{title}</h4>
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
