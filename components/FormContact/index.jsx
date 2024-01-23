const index = () => {
  return (
    <>
      <form className="py-14 max-w-[700px] mx-auto w-full">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="full_name" className="font-bold">
              ФИО *
            </label>
            <input
              type="text"
              id="full_name"
              placeholder="Введите ФИО"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="gmail" className="font-bold">
              Ваша почта *
            </label>
            <input
              type="text"
              id="gmail"
              placeholder="example@yourmail.com"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="company" className="font-bold">
              Компания *
            </label>
            <input
              type="text"
              id="company"
              placeholder="Название вашей компании"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="theme" className="font-bold">
              Тема *
            </label>
            <input
              type="text"
              id="theme"
              placeholder="Опишите вкратце"
              className="py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <label htmlFor="message" className="font-bold">
            Сообщение *
          </label>
          <textarea
            id="message"
            placeholder="Введите текст сообщении..."
            rows={4}
            className="max-h-[200px] min-h-[100px] w-full py-4 px-6 outline-none border-gray-200 border rounded-[20px] focus:border-main"
          />
        </div>
        <button className="bg-dark py-4 px-8 text-white rounded-full mt-4">
          Отправить
        </button>
      </form>
    </>
  );
};

export default index;
