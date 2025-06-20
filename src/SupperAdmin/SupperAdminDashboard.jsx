import React, { useState } from 'react'
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import SelectBox from '../components/share/SelectBox';

const weeklyData = [
    { name: "Sat", amt: 20 },
    { name: "Sun", amt: 50 },
    { name: "Mon", amt: 70 },
    { name: "Tue", amt: 60 },
    { name: "Wed", amt: 80 },
    { name: "Thu", amt: 40 },
    { name: "Fri", amt: 90 },
];

const monthlyData = [
    { name: "Week 1", amt: 200 },
    { name: "Week 2", amt: 300 },
    { name: "Week 3", amt: 400 },
    { name: "Week 4", amt: 500 },
];

const yearlyData = [
    { name: "Jan", amt: 7000 },
    { name: "Feb", amt: 5000 },
    { name: "Mar", amt: 9000 },
    { name: "Apr", amt: 9500 },
    { name: "May", amt: 8010 },
    { name: "Jun", amt: 10000 },
    { name: "Jul", amt: 9000 },
    { name: "Aug", amt: 8500 },
    { name: "Sep", amt: 9000 },
    { name: "Oct", amt: 12000 },
    { name: "Nov", amt: 13000 },
    { name: "Dec", amt: 14000 },
];

const SupperAdminDashboard = () => {
    const [selectedValue, setSelectedValue] = useState("weekly");
    const cardData = [
        {
            id: 1,
            icon: (
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.967144 11.4297C-0.286644 12.8298 -0.312895 14.9423 0.837141 16.4299C3.07097 19.3297 5.67006 21.9288 8.56988 24.1626C10.0574 25.3127 12.17 25.2864 13.57 24.0326C17.3546 20.6473 20.9108 17.0151 24.2154 13.1598C24.549 12.7763 24.7544 12.2982 24.8029 11.7922C25.0079 9.54716 25.4317 3.07946 23.6754 1.32441C21.919 -0.430649 15.4526 -0.00813599 13.2075 0.19812C12.7016 0.246594 12.2234 0.452013 11.84 0.785639C7.98471 4.08976 4.35248 7.64556 0.967144 11.4297Z" fill="#23AA49" />
                    <path d="M19.3755 3.74951C19.8728 3.74951 20.3498 3.94706 20.7014 4.2987C21.0531 4.65034 21.2506 5.12727 21.2506 5.62457C21.2506 6.12187 21.0531 6.59879 20.7014 6.95044C20.3498 7.30208 19.8728 7.49963 19.3755 7.49963C18.8783 7.49963 18.4013 7.30208 18.0497 6.95044C17.698 6.59879 17.5005 6.12187 17.5005 5.62457C17.5005 5.12727 17.698 4.65034 18.0497 4.2987C18.4013 3.94706 18.8783 3.74951 19.3755 3.74951Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.735 12.9588C14.7625 12.4562 14.9025 11.54 14.14 10.8424M14.14 10.8424C13.8491 10.5896 13.5102 10.3979 13.1437 10.2787C11.5724 9.72491 9.64361 11.5775 11.0087 13.2738C11.7424 14.1863 12.3087 14.4663 12.2537 15.5013C12.2162 16.2289 11.5012 16.9901 10.5586 17.2801C9.73986 17.5327 8.83609 17.1989 8.26482 16.5601C7.56605 15.7801 7.6373 15.0451 7.63105 14.7251M14.14 10.8424L15 9.98242M8.32482 16.6576L7.50854 17.4739" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            title: "Total earnings",
            value: "$ 200.36",
        },

        {
            id: 3,
            icon: (
                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9556 0H8.04483C6.59543 0 5.87134 3.59063e-08 5.28821 0.36024C4.70628 0.719276 4.38219 1.36747 3.73399 2.66385L2.04364 6.93974C1.65207 7.92769 1.31111 9.09155 1.96894 9.92648C2.27897 10.32 2.70395 10.6071 3.18475 10.7478C3.66555 10.8886 4.17827 10.876 4.65156 10.7118C5.12486 10.5475 5.53521 10.2399 5.82552 9.8316C6.11582 9.42331 6.27166 8.93469 6.27134 8.43372C6.27134 9.07279 6.52521 9.68569 6.9771 10.1376C7.429 10.5895 8.0419 10.8433 8.68097 10.8433C9.32005 10.8433 9.93295 10.5895 10.3848 10.1376C10.8367 9.68569 11.0906 9.07279 11.0906 8.43372C11.0906 9.07279 11.3445 9.68569 11.7964 10.1376C12.2483 10.5895 12.8612 10.8433 13.5002 10.8433C14.1393 10.8433 14.7522 10.5895 15.2041 10.1376C15.656 9.68569 15.9099 9.07279 15.9099 8.43372C15.9099 9.07279 16.1637 9.68569 16.6156 10.1376C17.0675 10.5895 17.6804 10.8433 18.3195 10.8433C18.9586 10.8433 19.5715 10.5895 20.0234 10.1376C20.4753 9.68569 20.7291 9.07279 20.7291 8.43372C20.7291 8.93459 20.8851 9.42304 21.1755 9.83113C21.4659 10.2392 21.8762 10.5467 22.3495 10.7107C22.8227 10.8748 23.3353 10.8873 23.816 10.7466C24.2967 10.6058 24.7216 10.3187 25.0315 9.92528C25.6894 9.09034 25.3472 7.92649 24.9568 6.93854L23.2653 2.66385C22.6171 1.36747 22.2942 0.719276 21.7111 0.36024C21.1291 3.59063e-08 20.4038 0 18.9556 0Z" fill="#23AA49" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1387 23.1926H25.5483C25.7879 23.1926 26.0178 23.2878 26.1872 23.4572C26.3567 23.6267 26.4519 23.8565 26.4519 24.0962C26.4519 24.3358 26.3567 24.5657 26.1872 24.7351C26.0178 24.9046 25.7879 24.9998 25.5483 24.9998H1.45195C1.2123 24.9998 0.982462 24.9046 0.813002 24.7351C0.643542 24.5657 0.54834 24.3358 0.54834 24.0962C0.54834 23.8565 0.643542 23.6267 0.813002 23.4572C0.982462 23.2878 1.2123 23.1926 1.45195 23.1926H3.86159V12.6504C4.75797 12.6504 5.58809 12.3709 6.27122 11.895C6.9784 12.3871 7.81933 12.6507 8.68085 12.6504C9.57724 12.6504 10.4074 12.3709 11.0905 11.895C11.7977 12.3871 12.6386 12.6507 13.5001 12.6504C14.3965 12.6504 15.2266 12.3709 15.9098 11.895C16.6169 12.3871 17.4579 12.6507 18.3194 12.6504C19.2158 12.6504 20.0459 12.3709 20.729 11.895C21.4362 12.3871 22.2771 12.6507 23.1387 12.6504V23.1926ZM10.4881 23.1926H16.5122V19.8793C16.5122 18.7528 16.5122 18.1902 16.27 17.7709C16.1115 17.4958 15.8834 17.2672 15.6085 17.1083C15.1893 16.8673 14.6266 16.8673 13.5001 16.8673C12.3736 16.8673 11.811 16.8673 11.3917 17.1083C11.1168 17.2672 10.8887 17.4958 10.7302 17.7709C10.4881 18.1902 10.4881 18.7528 10.4881 19.8793V23.1926Z" fill="#23AA49" />
                </svg>

            ),
            title: "Total Store",
            value: "500",
        },
        {
            id: 4,
            icon: (
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1668 21.6667V25H0.833496V21.6667C0.833496 21.6667 0.833496 15 12.5001 15C24.1668 15 24.1668 21.6667 24.1668 21.6667ZM18.3335 5.83338C18.3335 4.67966 17.9913 3.55185 17.3504 2.59256C16.7094 1.63328 15.7983 0.885607 14.7324 0.444097C13.6665 0.00258649 12.4937 -0.112933 11.3621 0.112147C10.2306 0.337227 9.19116 0.892797 8.37535 1.7086C7.55955 2.52441 7.00398 3.5638 6.7789 4.69536C6.55382 5.82691 6.66934 6.99979 7.11085 8.06569C7.55236 9.13159 8.30003 10.0426 9.25932 10.6836C10.2186 11.3246 11.3464 11.6667 12.5001 11.6667C14.0472 11.6667 15.531 11.0521 16.6249 9.95816C17.7189 8.8642 18.3335 7.38047 18.3335 5.83338ZM24.0668 15C25.0914 15.7929 25.9297 16.8007 26.5229 17.9525C27.1161 19.1043 27.4496 20.3721 27.5001 21.6667V25H34.1667V21.6667C34.1667 21.6667 34.1667 15.6167 24.0668 15ZM22.5001 6.13273e-05C21.3531 -0.00527389 20.2314 0.337612 19.2835 0.983392C20.2959 2.39795 20.8402 4.09386 20.8402 5.83338C20.8402 7.5729 20.2959 9.26881 19.2835 10.6834C20.2314 11.3291 21.3531 11.672 22.5001 11.6667C24.0472 11.6667 25.5309 11.0521 26.6249 9.95816C27.7188 8.8642 28.3334 7.38047 28.3334 5.83338C28.3334 4.28629 27.7188 2.80256 26.6249 1.7086C25.5309 0.614642 24.0472 6.13273e-05 22.5001 6.13273e-05Z" fill="#23AA49" />
                </svg>

            ),
            title: "Total User",
            value: "3k",
        },
    ];



    //   const formatYAxis = (tickItem) => {
    //     return `${tickItem}`;
    //   };

    //   const handleSelectChange = (value) => {
    //     setSelectedValue(value);
    //     console.log("Selected", value);
    //   };
    const selectOptions = [
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
        { value: "yearly", label: "Yearly" },
    ];

    const getChartData = () => {
        switch (selectedValue) {
            case "monthly":
                return monthlyData;
            case "yearly":
                return weeklyData;
            default:
                return yearlyData;
        }
    };

    return (
        <div>
            <div className="rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[12px]">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-white w-[360px] py-6 flex justify-center items-center rounded-lg shadow-sm">
                            <div className="flex flex-col justify-center items-center text-center">
                                <div className="mb-3 bg-lowGreen p-4 rounded-full">{card.icon}</div>
                                <p className="py-1 font-roboto text-[#777777] font-normal text-base">{card.title}</p>
                                <h3 className="font-roboto font-bold text-[28px]">{card.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ============================= react rechart ========================= */}

            <div className=" rounded-2xl mt-2 p-2 text-gray-300 pr-14">
                <div className="flex justify-between items-center">
                    <h3 className="mb-5 text-[24px] font-roboto font-medium  text-black">
                        User statistics
                    </h3>
                    <SelectBox
                        options={selectOptions}
                        value={selectedValue}
                        onChange={(value) => setSelectedValue(value)}
                    />
                </div>
                <div className="bg-white py-8 px-4">
                    <ResponsiveContainer className=" " width="100%" height={400}>
                        <AreaChart data={getChartData()} syncId="anyId">
                            <defs>
                                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00D6FF" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#00D6FF" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />

                            <XAxis axisLine={false} dataKey="name" />
                            <YAxis
                                axisLine={false}
                                tickFormatter={(value) => value}
                                ticks={[
                                    0, 20, 40, 60, 80, 100, 200, 500, 1000, 5000, 10000, 15000,
                                ]}
                            />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="amt"
                                stroke="url(#colorAmt)"
                                fill="url(#colorAmt)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default SupperAdminDashboard