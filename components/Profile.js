import React from 'react'

export default function Profile() {
    return (
      <div>
        <div className="text-center flex flex-col   sm:flex-row sm:text-left sm:items-center sm:p-20 sm:pl-40 sm:pt-5 ">
          <img
            className="w-full cursor-pointer h-96 sm:w-2/5 sm:max-w-md sm:rounded-full rounded-r-full sm:transition transform hover:sm:scale-105 duration-300 ease-in-out hover:animate-pulse"
            src="https://i.ibb.co/ncQmY1J/cartoon3.png"
            alt="cartoon"
          />

          <div className="mt-5 sm:ml-5 animate-pulse hover:animate-bounce hover:sm:animate-spin ">
            <h1 className="text-5xl">Jahed Hossen</h1>
            <h2 className="text-2xl">Like to code...</h2>
          </div>
        </div>
      </div>
    );
}
