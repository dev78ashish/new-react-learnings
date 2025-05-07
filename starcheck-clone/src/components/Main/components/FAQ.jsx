import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={toggle}
      >
        <h3 className="text-2xl font-medium text-gray-900">{question}</h3>
        <ChevronDown
          className={`w-10 h-10 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5 px-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 max-w-[50%]">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState([0]); 

  const faqData = [
    {
      question: "Why is it important to check your wallet for risks?",
      answer: `Checking a wallet address for risks helps to protect both businesses and individuals from the freezing of their assets by exchanges or other custody services. Also, it mitigates the risk of fraud and financial crimes. Wallet risk check allows to identify suspicious or blacklisted addresses that may be associated with fraudulent or illegal activities.`
    },
    {
      question: "When do you need to make a wallet risk check?",
      answer: `You may need to make a wallet risk check in several situations. Here are some common scenarios:
  Making a P2P trade: some exchanges or custody services have blacklisted or restricted wallet addresses due to involvement in illegal activities, scams, or fraud. Verifying the counterparty's wallet address can help you ensure that you are not engaging in a transaction with a blacklisted or restricted address;
  Onboarding new customers: when you onboard new customers or users to your platform or financial service, it is essential to verify their wallet addresses to ensure compliance with AML regulations. This helps prevent the risk of unknowingly facilitating money laundering or other illicit activities.`
    },
    {
      question: "How does wallet risk checking work?",
      answer: `To check a wallet address for risks using StarCheck, you just need to paste the wallet address, select an asset, and click the "Check" button. Afterward, you will immediately be able to see the risk score for your wallet address.`
    },
    {
      question: "What do the stars in the check results mean?",
      answer: `StarCheck uses a five-star scale to assess the risk score. The fewer the number of stars, the higher the likelihood of the wallet address being involved in money laundering or other illicit activities. For instance, if the risk score is one star, it indicates that the wallet address is very risky for sending or receiving funds. A five-star risk score, on the other hand, signifies that the wallet address is safe for sending or receiving crypto.`
    },
    {
      question: "Where can you use the wallet risk check results?",
      answer: `The results of a wallet risk check can be used for various purposes, depending on your specific needs. Here are a few common use cases:
  P2P transactions: if you are involved in peer-to-peer transactions outside of established platforms, sharing the risk check results with the counterparty can help build trust and provide proof of your commitment to secure transactions;
  Exchanges and custody services: some platforms may freeze your assets if they are marked as 'dirty'. They may request additional information to clarify the source of your funds. Providing the risk check results can offer evidence regarding the source of your money and demonstrate your proactive approach to security.`
    }
  ];
  

  const toggleFAQ = (index) => {
    setOpenItems(prevOpenItems => {
      if (prevOpenItems.includes(index)) {
        return prevOpenItems.filter(item => item !== index);
      } 
      else {
        return [...prevOpenItems, index];
      }
    });
  };

  return (
    <div className="bg-[#F0F0F5] w-full py-8 px-4 rounded-4xl">
      <h1 className="text-6xl font-bold mb-8 text-gray-900">FAQ</h1>
      <div className="space-y-1">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.includes(index)}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}