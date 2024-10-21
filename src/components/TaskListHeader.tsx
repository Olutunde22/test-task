export default function TaskListHeader() {
  return (
    <div className="w-full flex h-[123px] space-x-[21px] pl-8 pt-[19px] pb-[20px] pr-[90px] bg-[#3556AB]">
        <img className="rounded h-[50px] w-[50px]" src="/user_avatar.png" />
        <div className="flex flex-col space-y-2 text-white">
            <h2 className="font-medium text-base leading-[18.75px] text-shadow">Hello, Jhon</h2>
            <p className="italic text-[25px] font-thin leading-[26.46px] text-shadow">What are your plans for today?</p>
        </div>
    </div>
  )
}
