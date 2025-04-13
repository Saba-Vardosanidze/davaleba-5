import styles from "./App.module.css";
const App = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center m-auto mt-[154px]">
      <div className="flex flex-col justify-center items-center bg-[#F7F6F5] w-[100%] max-w-[430px] lg:max-w-[555px] min-h-[320px] lg:min-h-[348px]">
        <h2
          className={`font-bold text-[28px] max-w-[390px] text-center ${styles.mainTitle} text-[#3A3845] mb-[24px]`}
        >
          UP TO 40% OFF OUR CHIRSTMAS COLLECTION
        </h2>
        <p className="max-w-[389px] text-[#595667] text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
        <button className="mt-[34px] border-b border-black font-bold text-[#3A3845] text-[14px] cursor-pointer">
          SHOP NOW
        </button>
      </div>
      <div>
        <img
          src="/images/png/backgroundMobile.png"
          alt="background mobile"
          className="lg:hidden block"
        />
        <img
          src="/images/png/backgroundLaptop.png"
          alt="background large"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default App;
