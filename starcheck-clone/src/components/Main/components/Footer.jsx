import React from 'react';
import logo from '../../../assets/apple-touch-icon.png';

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F5] rounded-4xl px-12 py-16 text-sm text-gray-700 -mx-8 -mb-8">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-md space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
            <h1 className="text-3xl font-semibold text-black">StarCheck</h1>
          </div>
          <p className="opacity-60">2024 &copy; StarCheck. All rights reserved.</p>
          <div className="opacity-60">
            <p>StarCheck OÜ (16856447)</p>
            <p>Harju maakond, Tallinn, Kesklinna linnaosa,</p>
            <p>Harju tn 3 // Vana-Posti tn 2, 10146</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-20 gap-y-12 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-medium text-black mb-2">Product</h2>
            <ul className="space-y-1 opacity-60 leading-loose">
              <li>Pricing</li>
              <li>Features</li>
              <li>Support</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium text-black mb-2">Legal</h2>
            <ul className="space-y-1 opacity-60 leading-loose">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium text-black mb-2">Social</h2>
            <ul className="space-y-1 opacity-60 leading-loose">
              <li>X (Twitter)</li>
              <li>Telegram</li>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>Reddit</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

      </div>

      <hr className="my-12 border-gray-300" />

      <div className="text-xs text-gray-600 opacity-60 space-y-2">
        <p className="font-semibold">DISCLAIMER</p>
        <p>
          Please note that StarCheck OÜ will never offer to buy or invest in crypto assets. StarCheck OÜ does not provide any crypto asset services including but not limited to crypto asset exchange,
          crypto asset wallet, or crypto asset payment services. StarCheck OÜ does not provide any investment or trading advice.
        </p>
        <p>
          StarCheck OÜ exclusively focuses on providing KYT Check services for information purposes only. The KYT Check service is provided &lt;as is&gt; without warranty or representation of any kind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
