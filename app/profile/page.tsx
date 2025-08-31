import ClassCard from "./ClassCard";

export default function ProfilePage() {
  const liste=["öğrenci" , "organizatör" ,"baba" ,"hoca"]
  return (
    <main className="h-auto w-full flex flex-col items-center">
      
       <section className="relative h-[300px] w-full">
       
        <div className="absolute w-[560px] h-[560px] top-[-300px] left-1/2 -translate-x-1/2 rounded-full bg-muted z-0" >
        </div>

      
        <div className="absolute w-[124px] h-[124px] top-[190px] left-[139px] rounded-full border-[3px] border-border bg-muted overflow-hidden z-10" />
      </section>

      <div className="flex mt-2 flex-col items-center justify-center gap-[6px] text-center px-2 opacity-100 font-urbanist">
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
      <div className="flex flex-row items-center justify-center gap-2 mt-2">
        {
          liste.map((text,i)=>(
             <span key={i} className="px-3 py-1 rounded-full bg-[#DAE2FF] text-[#5083F0] text-[12px] leading-[16px] font-medium">
                {text}
            </span>

          ))
        }
        
      </div>
      <div className="bg-red-500  flex flex-row gap-5 w-[40%] opacity-100 font-urbanist ">
        <div className="flex flex-col items-center bg-blue-500 ml-2 ">
          <div className=" text-[32px] leading-[20px] font-medium text-muted-foreground text-center">Takipçi</div>
          <div className=" text-[24px] leading-[40px] font-semibold text-center pt-2">2.4K</div>
        </div>

        <div className="flex flex-col items-center bg-green-600 ">
          <div className=" text-[16px] leading-[20px] font-medium text-muted-foreground text-center">Takip</div>
          <div className=" text-[24px] leading-[40px] font-semibold text-center pt-2">128</div>
        </div>
      </div>

      <div>
        <ClassCard value={2}/>
      </div>

    </main>
  );
}

