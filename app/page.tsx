export default function Page() {
  
  return (
    <div className="w-full h-full flex justify-end">
      <div className="absolute top-1/4 left-20 mr-20 flex flex-col text-white max-w-3xl z-20">
        <span className="text-8xl">Hello there, welcome to my site</span>
        <button className="bg-white text-black">Lets Explore</button>
      </div>

      <div className="w-full max-w-5xl z-10">
        <svg width="100%" height="100%" viewBox="0 0 1064 935" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Polygon 1" d="M1059.76 -7.57896C1065.21 -7.5784 1069.66 -3.2108 1069.76 2.2403L1086.43 924.414C1086.64 936.302 1068.5 938.983 1065.24 927.549C1025.62 788.649 945.905 543.457 922.02 724.536C890.265 965.287 754.096 505.901 750.227 492.777C750.106 492.365 750.071 492.327 749.894 491.936C744.463 479.928 651.427 280.112 604.102 575.524C555.42 879.412 358.587 335.657 208.835 225.462C208.348 225.103 207.924 224.728 207.507 224.29L2.91433 9.20659C-3.14356 2.83809 1.37138 -7.68645 10.1609 -7.68556L1059.76 -7.57896Z" fill="url(#paint0_linear_105_7)" />
          <defs>
            <linearGradient id="paint0_linear_105_7" x1="135.456" y1="-245.244" x2="1385.82" y2="1005.12" gradientUnits="userSpaceOnUse">
              <stop offset="0.175253" stop-color="#101F6D" stop-opacity="0.912121" />
              <stop offset="0.625954" stop-color="#1E3BD3" stop-opacity="0.912121" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>
  )
}