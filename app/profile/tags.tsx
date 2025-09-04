interface TagsProps{
    liste: string[];}
export default function Tags({liste}:TagsProps){
    return(
        <div className="flex flex-row items-center justify-center gap-2 mt-2">
        {
          liste.map((text,i)=>(
             <span key={i} className="px-3 py-1 rounded-full bg-[#DAE2FF] text-[#5083F0] text-[12px] leading-[16px] font-medium">
                {text}
            </span>

          ))
        }
        
      </div>
    );
}