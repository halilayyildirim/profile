export default function cards(){
    return(
          <div className="w-full overflow-x-auto mb-10">
            <div className="flex gap-4 pb-4 justify-start">
              <div 
                className="text-center flex-shrink-0 bg-[#F5F7FA] p-4 flex flex-col items-center justify-start text-[#3B3B3B] shadow-md"
                style={{
                  width: '160px',
                  height: '180px',
                  borderRadius: '16px',
                  backgroundColor:"#8DC2FF",
                  color:"white"
                }}
              >
                <h3 className="mt-2 mb-1 onest text-base">Mühendislik Fakültesi</h3>
                <img src="https://w7.pngwing.com/pngs/202/308/png-transparent-gear-computer-icons-gear-miscellaneous-cdr-line-thumbnail.png" alt=""
                className="mx-auto"
                style={{ width: "64px", height: "64px" }} />
              </div>
              <div 
                className="text-center flex-shrink-0 bg-[#F5F7FA] p-4 flex flex-col items-center justify-start text-[#3B3B3B] shadow-md"
                style={{
                  width: '160px',
                  height: '180px',
                  borderRadius: '16px',
                  backgroundColor:"#A694F5",
                  color:"white"
                }}
              >
                <h3 className="mt-2 mb-1 urbanist text-base">Bilgisayar Mühendisliği</h3>
                {(() => {
                  const grade = 1;
                  const getPercent = (g: number) => {
                    if (g === 4) return 100;
                    if (g === 2) return 50;
                    if (g === 1) return 25;
                    if (g === 3) return 75;
                    return 0;
                  };
                  const percent = getPercent(grade);
                  const radius = 43.5;
                  const stroke = 8;
                  const normalizedRadius = radius - stroke / 2;
                  const circumference = 2 * Math.PI * normalizedRadius;
                  const strokeDashoffset = circumference - (percent / 100) * circumference;
                  return (
                    <svg
                      height={radius * 2}
                      width={radius * 2}
                      className="my-2 block"
                      style={{ display: "block" }}
                    >
                      <circle
                        stroke="#e5e7eb"
                        fill="none"
                        strokeWidth={stroke}
                        cx={radius}
                        cy={radius}
                        r={normalizedRadius}
                      />
                      <circle
                        stroke="#5083F0"
                        fill="none"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        cx={radius}
                        cy={radius}
                        r={normalizedRadius}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: "stroke-dashoffset 0.5s" }}
                      />
                      <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        dy=".3em"
                        fontSize="18"
                        fill="#5083F0"
                        fontWeight="bold"
                      >
                        {grade}. Sınıf
                      </text>
                    </svg>
                  );
                })()}
              </div>
              <div 
                className="text-center flex-shrink-0 bg-[#F5F7FA] p-4 flex flex-col items-center justify-start text-[#3B3B3B] shadow-md"
                style={{
                  width: '160px',
                  height: '180px',
                  borderRadius: '16px',
                  backgroundColor:"#F37979",
                  color:"white"
                }}
              >
                <h3 className="mt-2 mb-1 font-medium text-base">Öğrenci Kulüpleri</h3>
              </div>
            </div>
          </div>
    );
}