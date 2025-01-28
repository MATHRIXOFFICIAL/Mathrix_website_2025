import "../../app/globals.css";
import Background from "../../../public/images/1.jpg";

export default function AboutMathrix() {
  return (
    <>
      <div>
        <div className="bg-red-400 text-center p-10 text-2xl md:text-5xl">
          <div className="waviy">
            <center>
              <span>After 5 long years !!!</span>
            </center>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap bg-yellow-500 align-center w-full p-4 md:p-10">
          <div className="w-full md:w-1/2">
            <img
              src={Background}
              alt="Background"
              className="w-full h-full object-cover bg-red-400"
            />
          </div>
          <div className="w-full md:w-1/2 md:px-10">
            <div className="text-lg md:text-3xl my-5">What is Mathrix?</div>
            <div className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </div>
          </div>
        </div>

        <div>
          <div className="text-3xl text-center my-5">History of Mathrix</div>
        </div>
      </div>

      <style>{`
       .typing-animation {
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid rgba(255, 255, 255, 0.75);
            animation: typing 4s steps(40, end) infinite, blink 0.5s step-end infinite;
        }

        @keyframes typing {
            0% {
                width: 0;
            }

            50% {
                width: 100%;
            }

            85% {
                width: 100%;
            }

            100% {
                width: 0;
            }
        }

        @keyframes blink {
            from {
                border-right-color: rgba(255, 255, 255, 0.75);
            }

            to {
                border-right-color: transparent;
            }
        }

        .waviy {
            position: relative;
            -webkit-box-reflect: below -5px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
            font-size: 40px;
        }

        .waviy span {
            font-weight : 700;
            position: relative;
            display: inline-block;
            color: #000;
            text-transform: uppercase;
            animation: waviy 1s infinite;
            animation-delay: calc(0.1s * var(--i));
        }

        @keyframes waviy {

            0%,
            40%,
            100% {
                transform: translateY(0);
            }

            20% {
                transform: translateY(-5px);
            }
        }

      `}</style>
    </>
  );
}
