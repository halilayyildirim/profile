export default function background(){
    return(  
      <div
        className="w-[560px] h-[560px] rounded-full opacity-100 bg-muted z-0 overflow-hidden mb-8 relative"
        style={{ position: "relative", left: "50%", transform: "translateX(-50%) translateY(-35px)" }}
      >
        <img 
          src="https://media.istockphoto.com/id/1317323736/tr/foto%C4%9Fraf/a%C4%9Fa%C3%A7lara-do%C4%9Fru-g%C3%B6ky%C3%BCz%C3%BCne-bir-g%C3%B6r%C3%BCn%C3%BCm.jpg?s=612x612&w=0&k=20&c=VXd5-5UvbflN6XTuSfYFhl1G_2eNGMXhqnn8Os8Fw_k=" 
          alt="Background Forest" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    );
}