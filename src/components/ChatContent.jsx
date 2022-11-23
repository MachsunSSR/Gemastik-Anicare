import React, {useState} from 'react'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

const ChatContent = () => {

    const [chatItems, setChatItems] = useState([
        {
        key: 1,
        type: "other",
        msg: "Halo, perkenalkan, saya adalah Anibot, disini saya akan membantu mendiagnosis penyakit sapi anda.",
        },
        {
        key: 2,
        type: "other",
        msg: "Jawab pertanyaan berikut untuk diagnosa sapi anda",
        },
        {
        key: 3,
        type: "other",
        msg: "Apakah sapi anda tidak mau makan?",
        },
    ]);
    const [stage, setStage] = useState(0);
    const [input, setInput] = useState("");

    const questionList = [
        "Apakah terdapat luka/lepuh pada daerah mulut sapi?",
        "Apakah terdapat luka/lepuh pada daerah keempat kakinya?",
        "Berapa suhu sapi anda? (dalam celcius)",
        "Berapa lama demam yang dialami oleh sapi anda? (dalam hari)",
        "Apakah sapi anda bergetaran?",
        "Apakah sapi anda lebih sering berbaring daripada biasanya?",
        "Apakah sapi anda mengalami salah satu gejala menggeretakkan gigi/ menggosokkan mulut/ leleran mulut?",
        "Apakah sapi anda menghasilkan susu yang lebih sedikit?",
        "Apakah sapi anda bernafas dengan cepat/terengah-engah?",
    ]

    // Add msg
    const addMsg = async (question) => {
        const newMsg = {
            key: chatItems.length + 1,
            type: "",
            msg: question? "Iya." : "Tidak.",
        }
        const botMsg = {
            key: chatItems.length + 2,
            type: "other",
            msg: questionList[stage],
        }
        ;
        setStage(stage + 1)
        setChatItems([...chatItems, newMsg, botMsg]);
    };

    const textMsg = () => {
        const newMsg = {
            key: chatItems.length + 1,
            type: "",
            msg: input,
        }
        const botMsg = {
            key: chatItems.length + 2,
            type: "other",
            msg: questionList[stage],
        }
        ;
        setStage(stage + 1)
        setChatItems([...chatItems, newMsg, botMsg]);
        setInput("")
    }

    // Handle input
    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input)
    };

  return (
    <div className='space-y-8'>
        <div className="flex flex-col space-y-4">
            {chatItems.map((item) => (
            <div
                key={item.key}
                className={`flex items-center space-x-4 ${
                item.type === "other" ? "justify-start" : "justify-end"
                }`}
            >
                <div
                className={`px-4 py-2 rounded-xl ${
                    item.type === "other"
                    ? "bg-gray-200 text-black"
                    : "bg-[#35874B] text-white"
                }`}
                >
                {item.msg}
                </div>
                </div>
            ))}
            <div className={stage == 3 || stage == 4 || stage > 9? 'hidden' : 'flex justify-start space-x-4'}>
                <button className="flex items-center space-x-4 justify-center py-2 px-4 bg-white border-green-600 border text-green-600 w-40 rounded-xl"
                    onClick={() => addMsg(true)}>
                    Iya
                </button>
                <button onClick={() => addMsg(false)} className="flex items-center space-x-4 justify-center py-2 px-4 bg-green-600 border-green-600 border text-white w-40 rounded-xl">
                    Tidak
                </button>
            </div>
        </div>
        <div className={stage == 3 || stage == 4? 'w-full flex space-x-4 items-center' : 'hidden'}>
            <input value={input} onChange={handleInput} type="number" className='w-full rounded-lg border py-5 px-7' placeholder='Tulis disini'/>
            <button className='rounded-full p-4 w-16 h-16 bg-green-600 flex items-center justify-center' onClick={textMsg}>
                <PaperAirplaneIcon className='h-12 w-12 text-white'/>
            </button>
        </div>
    </div>
  )
}

export default ChatContent