export const Hero = () => {
  return (
    <div
      className={`my-48 flex max-w-xl flex-grow-0 flex-col items-center justify-center gap-3 lg:my-0 lg:items-start`}
    >
      <div
        className={`lg:text-start -mx-3 text-center text-[46px] font-semibold leading-[52px] tracking-[-0.015em] text-white text-opacity-[0.85] md:mx-0 lg:text-[64px] lg:leading-[76px] `}
      >
        rkbk.gq — tiny url shortner
      </div>
      <div
        className={`lg:text-start max-w-xs text-center text-lg text-white text-opacity-50 md:max-w-lg lg:max-w-none`}
      >
        Built with Cloudflare Workers and KV storage for {'sub 50 ms'} redirect
        time across the globe.
      </div>
    </div>
  );
};
