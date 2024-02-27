import React from "react";
import { FaComment, FaHeart, FaMusic, FaShare } from "react-icons/fa";

const VideoInfo = () => {
  return (
    <div className="flex flex-row">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src="data:image/png;base64,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"
        alt=""
      />
      <div className="ml-3 min-w-[80%]">
        <div>
          <a href="" className="text-xl font-bold hover:underline">
            anh dang code
          </a>
          <a href="" className="text-xl">
            kenh lap trinh
          </a>
        </div>

        <div>hay ghe tham anh dang code</div>

        <div className="flex flex-row items-center">
          <FaMusic />
          <span className="ml-3">Bai hat dang phat</span>
        </div>
      </div>

      <div>
        <button className="p-2 pl-3 pr-4 border-2 border-red-400 text-red-400 rounded-md">
          Follow
        </button>
      </div>
    </div>
  );
};

const VideoContent = () => {
  return (
    <div className="flex flex-row">
      <img
        className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSC5WDy_f-L4-rhGxtCmVzCMLuBTe4YoMZKQwaU9X6g&s"
        alt=""
      />

      <div className="flex flex-col justify-end ml-7">
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaHeart className="text-xl text-center" />
          </div>
          <span> 123123</span>
        </div>
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaComment className="text-xl text-center" />
          </div>
          <span> 123123</span>
        </div>
        <div className="text-center">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaShare className="text-xl text-center" />
          </div>
          <span> 1</span>
        </div>
      </div>
    </div>
  );
};
export default function Video() {
  return (
    <div className="max-w-[600px]">
      <VideoInfo />
      <VideoContent />
    </div>
  );
}
