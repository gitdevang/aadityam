import React from "react";

function SubFooter() {
  return (
    <div className="py-20 bg-[#F2EEEE]">
      <div className="flex flex-col justify-center items-center max-w-screen-xl gap-16 px-5 mx-auto">
        <h1 className="text-4xl sm:text-5xl font-p_bd text-center text-[#222222]">
          Let’s turn your dreams <br className="hidden sm:block" /> into reality
        </h1>
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-center items-center gap-3">
          <div className="w-full max-w-[425px] lg:max-w-none lg:w-1/2 py-20 bg-[#686FFB] rounded-t-3xl lg:rounded-none lg:rounded-l-3xl flex items-center justify-between px-10 cursor-pointer">
            <div className="w-full flex items-center gap-10 lg:gap-0 flex-col-reverse lg:flex-row lg:items-end text-white justify-between">
              <svg
                width="103"
                height="46"
                viewBox="0 0 103 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block w-20 xl:w-24"
              >
                <path
                  d="M0.878677 20.8787C-0.292892 22.0503 -0.292892 23.9497 0.878677 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615223 21.1421 0.615223 19.9706 1.7868L0.878677 20.8787ZM103 20L3 20V26L103 26V20Z"
                  fill="white"
                />
              </svg>
              <h3 className="text-5xl font-p_sb text-center lg:text-right">
                Sell a<br />
                Property
              </h3>
            </div>
          </div>
          <div className="w-full max-w-[425px] lg:max-w-none lg:w-1/2 py-20 bg-[#3AEB93] rounded-b-3xl lg:rounded-none lg:rounded-r-3xl flex items-center justify-between px-10 cursor-pointer">
            <div className="w-full flex items-center gap-10 lg:gap-0 flex-col-reverse lg:flex-row-reverse lg:items-end text-white justify-between">
              <svg
                width="103"
                height="46"
                viewBox="0 0 103 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block rotate-180 w-20 xl:w-24"
              >
                <path
                  d="M0.878677 20.8787C-0.292892 22.0503 -0.292892 23.9497 0.878677 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615223 21.1421 0.615223 19.9706 1.7868L0.878677 20.8787ZM103 20L3 20V26L103 26V20Z"
                  fill="white"
                />
              </svg>
              <h3 className="text-5xl font-p_sb text-center lg:text-left">
                Buy a<br />
                Property
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
