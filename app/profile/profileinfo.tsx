export default function ProfileInfo(){
    return(
        <div className="w-[222px] mx-auto flex flex-col items-center justify-center gap-[6px] text-center px-2 font-urbanist">
            <div className="text-[28px] leading-[36px] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              Halil Ayyıldırım
            </div>
            <div className="text-[16px] leading-[22px] font-medium text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
              @halilayyildirim
            </div>
            <div className="text-[14px] leading-[20px] font-normal text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
              Yönetim Bilişim Sistemleri - 3. Sınıf
            </div>
          </div>
    );
}