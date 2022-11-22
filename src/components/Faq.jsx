import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Faq = () => {

    const dataFaq = [
        {
            question: "Apa itu penyakit PMK pada sapi ?",
            answer: "Penyakit mulut dan kuku (PMK) adalah penyakit infeksi virus yang bersifat akut dan sangat menular. Penyakit ini menyerang semua hewan berkuku belah/genap, seperti sapi, kerbau, babi, kambing, domba termasuk juga hewan liar seperti gajah, rusa dan sebagainya.",
        },
        {
            question: "Penyakit apa saja pada sapi?",
            answer: "Penyakit mulut dan kuku (PMK) adalah penyakit infeksi virus yang bersifat akut dan sangat menular. Penyakit ini menyerang semua hewan berkuku belah/genap, seperti sapi, kerbau, babi, kambing, domba termasuk juga hewan liar seperti gajah, rusa dan sebagainya.",
        },
        {
            question: "Berapa lama PMK sembuh?",
            answer: "Penyakit mulut dan kuku (PMK) adalah penyakit infeksi virus yang bersifat akut dan sangat menular. Penyakit ini menyerang semua hewan berkuku belah/genap, seperti sapi, kerbau, babi, kambing, domba termasuk juga hewan liar seperti gajah, rusa dan sebagainya.",
        },
        {
            question: "Apa Penyebab PMK pada sapi?",
            answer: "Penyakit mulut dan kuku (PMK) adalah penyakit infeksi virus yang bersifat akut dan sangat menular. Penyakit ini menyerang semua hewan berkuku belah/genap, seperti sapi, kerbau, babi, kambing, domba termasuk juga hewan liar seperti gajah, rusa dan sebagainya.",
        },
        {
            question: "Bagaimana cara mencegah penyakit PMK pada sapi?",
            answer: "Penyakit mulut dan kuku (PMK) adalah penyakit infeksi virus yang bersifat akut dan sangat menular. Penyakit ini menyerang semua hewan berkuku belah/genap, seperti sapi, kerbau, babi, kambing, domba termasuk juga hewan liar seperti gajah, rusa dan sebagainya.",
        },
    ]

    return (
        <div className='bg-[#F5F9F8] flex flex-col justify-center items-center py-16 space-y-8 px-10 lg:px-40'>
            <p className='font-semibold'>FAQ'S</p>
            <h1 className='font-bold text-3xl text-center'>Temukan jawaban yang Anda butuhkan</h1>
            <Accordion className='w-full lg:w-3/4 space-y-6 transition duration-300 ease-in-out'>
                {dataFaq.map((item, index) => {
                    return(
                        <AccordionItem className='bg-white shadow-lg w-full p-6 space-y-6 rounded-xl transition ease-in-out duration-300' key={index}>
                            <AccordionItemHeading className='transition ease-in-out duration-300'>
                                <AccordionItemButton className='font-semibold text-lg transition duration-300 ease-in-out'>
                                    {item.question}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='transition ease-in-out duration-300'>
                                <p>{item.answer}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default Faq