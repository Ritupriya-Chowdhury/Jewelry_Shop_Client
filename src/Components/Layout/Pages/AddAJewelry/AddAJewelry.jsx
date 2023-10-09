import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async'






const AddAJewelry= () => {
    const {reset, register, handleSubmit, formState: { errors } } = useForm();
   

    const onSubmit = (data) => {
        console.log(data);
        const addJewelry={
          
           jewelryImage: data.musicClassName,
           jewelryName:data.classImage,
            price:data.price,
            
        }

        fetch('http://localhost:1830/addJewelry',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addJewelry)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            reset();
        })

    

    };



    return (
        <>
            <Helmet><title>Owner | Add A Jewelry</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 pt-36 pb-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="mb-4 col">
                        <label htmlFor="JewelryName" className="block mb-1 text-orange-700">
                            Jewelry Name:
                        </label>
                        <input
                            type="text"
                            id="JewelryName"
                            {...register('JewelryName', { required: 'Jewelry Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.musicClassName && <span className="text-red-500">{errors.musicClassName.message}</span>}
                    </div>

                    <div className="mb-4 col">

                        <label htmlFor="JewelryImage" className="block mb-1 text-orange-700">
                        Jewelry Image:
                        </label>
                        <input
                            type="text"
                            id="classImage"
                            {...register('JewelryImage', { required: 'Jewelry Image is required' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.classImage && <span className="text-red-500">{errors.classImage.message}</span>}
                    </div>
                </div>

                
                    


                <div className="">
                    
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-1 text-orange-700">
                            Price:
                        </label>
                        <input
                            type="number"
                            id="price"
                            {...register('price', { required: 'Price is required' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.price && <span className="text-red-500">{errors.price.message}</span>}
                    </div>
                </div>
                
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add
                </button>
            </form>
        </>
    );
};

export default AddAJewelry;