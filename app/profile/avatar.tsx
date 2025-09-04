export default function avatar(){
    return(
        <div className="w-[124px] h-[124px] mx-auto rounded-full border-[3px] border-border bg-muted overflow-hidden z-10 relative -mt-[130px] mb-4">
          <img 
            src="https://media.istockphoto.com/id/523761634/tr/foto%C4%9Fraf/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=OUXjTv4NASUWS-wjFdVLf1C1qjJfEi2MM05fIiFRwfE=" 
            alt="Profile Avatar" 
            className="w-full h-full object-cover object-center"
          />
        </div>
    );
}