
import { Modal, Select, Switch } from 'antd';
import { CloseCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Option } from 'lucide-react';

const EditProductModal = ({ isModalOpen, setIsModalOpen, }) => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [color, setColor] = useState('#ffffff');

    // const handleUpload = () => {
    //     setIsModalOpen(false);
    // };

    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreview(imageURL);
        }
    };

    return (

        <Modal
            open={isModalOpen}
            footer={null}
            closable={false}
            onCancel={handleCancel}
            width={1026}
            className="rounded-lg"
        >
            {/* Header */}
            <div className="flex justify-between items-center bg-green-600 text-white px-6 py-4 rounded-t-lg">
                <div></div>
                <h2 className="text-lg font-semibold">Edit product</h2>
                <CloseCircleOutlined onClick={handleCancel} className="text-white text-xl cursor-pointer" />
            </div>

            {/* Body */}
            <div className="px-6 py-4 space-y-6">
                {/* Image & Color */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold mb-1">Image</p>
                        <label
                            htmlFor="imageUpload"
                            className="cursor-pointer w-full h-40 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-50 transition overflow-hidden"
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="object-contain max-h-full"
                                />
                            ) : (
                                <div className="flex items-center justify-center text-gray-500">
                                    <UploadOutlined className="mr-2" /> Upload image
                                </div>
                            )}
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                    <div>
                        <p className="font-semibold mb-1">Choose color</p>
                        <p className="text-sm text-gray-500 mb-1">
                            Use product color for creating product background
                        </p>
                        <div className="flex items-center space-x-2">
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full h-10 border rounded"
                            />
                            <span className="text-gray-500 text-sm">default</span>
                        </div>
                    </div>
                </div>

                {/* Product Fields */}
                <div>
                    <p className="font-semibold mb-1">Name</p>
                    <input
                        type="text"
                        value="Fresh apple"
                        className="w-full p-2 border rounded bg-gray-100"
                        disabled
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold mb-1">Category</p>
                        <Select defaultValue="Fruits & Vegetables" className="w-full" >
                            <Option>Fruits & vegetables</Option>
                            <Option>Beverage</Option>
                            <Option>Bakery</Option>
                            <Option>Meat</Option>
                            <Option>Cleaning product</Option>
                            <Option>Drinks</Option>
                        </Select>
                    </div>
                    <div>
                        <p className="font-semibold mb-1">Expiry date</p>
                        <Select defaultValue="3 days" className="w-full" >
                            <Option>3 days</Option>
                            <Option>7 days</Option>
                            <Option>15 days</Option>
                            <Option>1 month</Option>
                            <Option>6 month</Option>
                            <Option>1 year</Option>

                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-2">
                        <div className="flex items-center border w-full rounded p-2 bg-gray-100">
                            <span className="mr-2">lbs -</span>
                            <span>50</span>
                        </div>
                        <Select defaultValue="lbs" >
                            <Option>lbs</Option>
                            <Option>kg</Option>
                            <Option>g</Option>
                            <Option>pc</Option>
                        </Select>
                    </div>
                    <div>
                        <p className="font-semibold mb-1">Tags</p>
                        <input
                            type="text"
                            placeholder="type & hit enter"
                            className="w-full p-2 border rounded bg-gray-100"
                            disabled
                        />
                    </div>
                </div>

                {/* Pricing */}
                <div>
                    <p className="font-semibold mb-2">Pricing</p>
                    <div className="p-4 bg-white rounded shadow space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm mb-1">Unit price</p>
                                <div className="border rounded px-3 py-2 flex items-center">
                                    <span className="mr-1">$</span> <span>50.00</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm mb-1">Sell price</p>
                                <div className="border rounded px-3 py-2 flex items-center">
                                    <span className="mr-1">$</span> <span>45.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm mb-1">Tax rate</p>
                                <div className="border rounded px-3 py-2">5%</div>
                            </div>
                            <div>
                                <p className="text-sm mb-1">Discount</p>
                                <div className="border rounded px-3 py-2 flex items-center">
                                    <span className="mr-1">$</span> <span>-5.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shipping */}
                <div>
                    <p className="font-semibold mb-2">Shipping</p>
                    <div className="p-4 bg-white rounded shadow space-y-4">
                        <div>
                            <p className="text-sm mb-1">Flat rate</p>
                            <div className="flex items-center justify-between border rounded px-3 py-2">
                                <span>$ 50.00</span>
                                <Switch defaultChecked />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm mb-1">Free shipping</p>
                            <div className="flex items-center justify-between border rounded px-3 py-2">
                                <span>Free shipping</span>
                                <Switch defaultChecked={false} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <p className="font-semibold mb-1">Description</p>
                    <textarea
                        placeholder="type here..."
                        rows={5}
                        className="w-full p-3 border rounded bg-gray-100"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 flex justify-end">
                <button onClick={handleCancel} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                    Save changes
                </button>
            </div>
        </Modal>
    )
}

export default EditProductModal