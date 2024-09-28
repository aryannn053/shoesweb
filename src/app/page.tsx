/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import shoes from "./assets/shoes.png"
import s1 from "./assets/s1.png"
import s2 from "./assets/s2.png"
import s3 from "./assets/s3.png"
import s4 from "./assets/s4.png"

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="body-font py-2">
        <div className="flex flex-wrap py-2 flex-col md:flex-row items-center">
        <h1 className="font-bold text-3xl text-black">BR.<span className="lightgraay-colored">F</span></h1>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center py-4">
            <input className="magn justify-center" placeholder="Search"/>
          </nav>
          <div className="inline-flex items-center py-4">
            <div className="text-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xmlSpace="preserve" fill="#000000" width="100" height="40" stroke="black" stroke-width="2"><g><g><path d="M62.744,32.725c-0.742,0.113-1.48,0.212-2.225,0.288l-0.002-0.003c-1.299,17.53-1.512,36.199-0.506,53.773    c0.73-0.216,1.459-0.45,2.186-0.689C61.186,68.64,61.42,50.087,62.744,32.725z"/><path d="M59.928,31.309l0.438,1.265l0.234-1.177C60.379,31.371,60.152,31.337,59.928,31.309z"/><path d="M78.586,78.186l-0.742-0.013c-4.748,3.274-10.105,5.88-15.646,7.719c-0.727,0.238-1.051,0.473-1.781,0.689    c0.041,0.735,0.074,1.686,0.119,2.419c0.732-0.207,1.068-0.188,1.787-0.454c5.307-1.965,11.91-5.151,17.051-8.744L78.586,78.186z"/><path d="M23.01,77.184c-0.184-0.072-3.646-1.334-3.828-1.406l-1.217,1.92c13.079,4.963,29.186,8.916,42.998,11.23l-0.338-2.269    c0.361-0.092-26.36-5.361-38.616-9.84"/><path d="M20.803,25.039c0.017-0.189,0.031-0.379,0.047-0.565c-0.557,0.003-1.113,0.018-1.665,0.011l-0.07-0.415l0,0L19.02,24.48    C19.606,24.674,20.21,24.85,20.803,25.039z"/><path d="M20.803,25.039c-0.579-0.185-1.169-1.129-1.743-1.352l0.016-1.255c-1.484,16.912-2.361,36.519-1.258,53.545    c0.033,0.5,0.052,1.004,0.088,1.499l2.427-0.024c-0.014-0.208-0.022-0.423-0.038-0.633C19.107,59.887,19.34,41.918,20.803,25.039z    "/><path d="M18.913,22.534c2.052,0.673,4.543,1.109,6.645,1.725c4.264-0.334,8.724-1.059,12.831-2.161    c0.371-0.89,0.811-1.792,1.338-2.657c-6.709,2.037-13.313,3.192-20.295,3.068"/><path d="M19.115,24.069l0.07,0.415c0.552,0.007,1.108-0.008,1.665-0.011c0.009-0.116,0.019-0.232,0.027-0.347L19.115,24.069z"/><path d="M54.477,18.524c-0.344,0.924-0.557,1.738-0.678,2.318c0.484,0.106,0.971,0.221,1.459,0.32    C55.064,20.252,54.811,19.355,54.477,18.524z"/><path d="M62.51,11.219c1.635-0.276,2.895,0.125,3.863,1.223c2.336,2.652,2.363,8.472,2.154,10.945    c0.707,0.085,1.41,0.163,2.117,0.239c0.268-2.963,0.193-9.349-2.67-12.598c-1.451-1.648-3.463-2.311-5.818-1.918    c-4.807,0.806-7.49,4.12-8.961,7.109c0.52,0.669,0.941,1.452,1.281,2.305C55.52,15.736,57.779,12.01,62.51,11.219z"/><path d="M53.205,21.621c-0.197-0.718-0.689-2.361-0.994-2.976c-0.223,0.673-0.379,1.995-0.488,2.459    C52.135,21.202,52.791,21.528,53.205,21.621z"/><path d="M79.689,38.008c0.082-4.472,0.186-8.897,0.311-13.28l-0.252-0.354l-0.326-0.11c-2.568-0.132-6.178-0.355-8.777-0.637    c-0.707-0.076-1.41-0.154-2.117-0.239c-4.438-0.547-8.883-1.293-13.27-2.224c0.162,0.771,0.277,1.555,0.361,2.322    c6.609,1.364,13.344,2.314,19.963,2.801c0.725,0.053,1.451,0.114,2.174,0.154c0.104,0.007,0.246,0.596-0.033,0.756    c-0.088,3.452-0.162,7.337-0.227,10.838c-0.082,4.451-0.139,8.932-0.299,13.373c-0.342,8.992-0.139,18.613,0.238,27.365    l2.023,0.854c-0.4-8.727-0.412-19.154-0.074-28.143C79.547,46.979,79.602,42.477,79.689,38.008z"/><path d="M78.691,27.117c0.008-0.386-0.34-1.102-0.328-1.486c-0.723-0.041-2.057,0.708-2.781,0.655    c-4.838,1.669-14.326,5.053-14.336,5.226c-6.926-0.81-15.31-2.245-22.29-3.822c-0.697-0.159-1.391-0.325-2.089-0.491    c-3.747-0.886-7.459-1.866-11.107-2.939c-2.1-0.615-4.593-1.052-6.645-1.725c0,0-1.096,3.088,1.687,2.505    c12.642,3.997,26.671,7.008,39.792,8.538l0.031-0.097c0.713-0.085,1.451-0.262,2.117-0.514    C68.383,30.817,72.088,29.892,78.691,27.117z"/><path d="M41.721,20.111c3.498,1.03,8.072,2.087,11.708,2.892c-0.061-0.458-0.135-0.913-0.227-1.363c0,0-1.627-0.624-1.48-1.259    c-2.803-0.659-5.566-1.397-8.278-2.198c-0.231,0.22-0.449,0.454-0.655,0.693l-0.46,0.434L41.721,20.111z"/><path d="M55.619,23.485c-0.084-0.768-0.199-1.552-0.361-2.322c-0.488-0.1-0.975-0.214-1.459-0.32    c0.121-0.58,0.334-1.395,0.678-2.318c-0.34-0.853-0.762-1.636-1.281-2.305c-0.092-0.118-0.182-0.232-0.279-0.345    c-1.443-1.634-3.42-2.295-5.712-1.911c-3.511,0.59-5.882,2.864-7.478,5.477c-0.527,0.865-0.967,1.768-1.338,2.657    c-0.796,1.909-1.262,3.768-1.521,5.101c0.698,0.166,1.392,0.332,2.089,0.491c0.314-1.605,0.961-4.11,2.188-6.396    c0.393-0.73,0.84-1.434,1.357-2.079c0.093-0.114,0.19-0.228,0.287-0.338c0,0,0.487-0.743,0.655-0.693    c1.105-1.055,2.456-1.832,4.111-2.113c1.573-0.259,2.797,0.136,3.752,1.215c0.346,0.392,0.645,0.853,0.902,1.361    c0.305,0.614,0.555,1.295,0.75,2.011c0.092,0.322,0.17,0.65,0.242,0.983c0.092,0.45,0.166,0.905,0.227,1.363    c0.443,3.245,0.16,7.209-0.004,7.745l2.047,0.376C55.674,30.459,55.979,26.852,55.619,23.485z"/></g></g></svg>
              <p className="font-bold">Cart</p>
            </div>
            <div className="text-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="mb-4 hsi" fill="#000000" height="25" width="100" version="1.1" id="Capa_1" viewBox="0 0 471.701 471.701" xmlSpace="preserve">
              <g>
                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"/>
              </g>
              </svg>
              <p className="font-bold">Favorites</p>
            </div>
            <div className="ps-6">
              <img src="https://i.pinimg.com/originals/df/8d/5b/df8d5b187effce468bb1bc2c1f12c4ac.jpg" className="rounded-full" width="50" height="30"/>
            </div>
          </div>
        </div>
      </header>
      <div className="flex section-group font-semibold">
        <p>Women</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Sports</p>
        <p>New</p>
        <p className="text-red-500">Sale</p>
      </div>
      <div className="border border-gray-100 border-1 rounded-none mt-5"></div>

      <div className="flex py-12 gap-24">
        <div>
          <p className="font-medium mb-8">Clothes and Shoes <span className="lightgraay-colored px-3">•</span> Shoes <span className="lightgraay-colored px-3">•</span> Rebook</p>
          <Image src={shoes} alt="shoes" className="rounded" width="700"></Image>
          <div className="grid grid-cols-4 gap-4 py-8">
            <Image src={s1} className="border border-gray-400 rounded" alt="skill issue"></Image>
            <Image src={s2} alt="skill issue"></Image>
            <Image src={s3} alt="skill issue"></Image>
            <Image src={s4} alt="skill issue"></Image>
          </div>
        </div>
        <div>
          <div className="flex gap-2 mt-12">
            <img src="https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/70266360_10156388219586836_1305010844928573440_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=_vOgFdY7cMUQ7kNvgG1qZtl&_nc_ht=scontent.fknu1-2.fna&oh=00_AYA0SDDtco5bO6dCw47FqjKV0sOQGmzApkPluAHHNNL6hA&oe=671F87AB" alt="rebook" className="rounded-full" width="30" height="30"/>
            <p className="font-bold mt-1 px-2">Reebok</p>
          </div>
          <h1 className="font-bold text-4xl mt-7">Shoes Reebok Zig Kinetica 3</h1>
          <div className="flex mt-5 gap-2"><svg height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xmlSpace="preserve" fill="#edcf5d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg><svg height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xmlSpace="preserve" fill="#edcf5d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg><svg height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xmlSpace="preserve" fill="#edcf5d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg><svg height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xmlSpace="preserve" fill="#edcf5d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg><svg height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xmlSpace="preserve" fill="#f2f0ea"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg><p className="lightgraay-colored px-4 font-medium text-sm">42 Reviews</p></div>
          <h1 className="text-5xl mt-16 font-bold">$199.90</h1>
          <p className="font-bold mb-6 mt-12">Color<span className="lightgraay-colored px-3">• White</span></p>
          <div className="flex gap-6">
            <img className="border border-gray-500 shadow-lg" src="https://grailify.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUtmQ2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--54354c38a86ac2e74bcab0332feee0723af1c3ce/unknown" width="70"/>
            <img className="grayscale hover:grayscale-0 shadow-lg" src="https://grailify.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUtmQ2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--54354c38a86ac2e74bcab0332feee0723af1c3ce/unknown" width="70"/>
            <img className="grayscale hover:grayscale-0 shadow-lg" src="https://grailify.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUtmQ2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--54354c38a86ac2e74bcab0332feee0723af1c3ce/unknown" width="70"/>
          </div>
          <p className="font-bold mb-6 mt-12">Size<span className="lightgraay-colored px-3">• EU Men</span></p>
          <div className="grid grid-cols-6 gap-4 text-center">
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">40.5</div>
            <div className="border text-white bg-black p-3 px-5 font-bold rounded cursor-pointer">41</div>
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">42</div>
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">43</div>
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">43.5</div>
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">44</div>
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">44.5</div>
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">45</div>
            <div className="border border-gray-200 p-3 px-5 font-bold rounded cursor-pointer">46</div>
          </div>
          <p className="font-medium mt-6 ylcm mb-6">Size guide</p>
          <div className="flex">
            <div className="border text-white bg-black p-3 px-5 font-bold rounded-2xl py-4 cursor-pointer w-full text-center">Add to cart</div>
          </div>
          </div>
      </div>
    </div>
  );
}