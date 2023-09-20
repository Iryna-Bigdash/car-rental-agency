import Select from "react-select";
import { useForm, Controller } from "react-hook-form";


export const Filter = ({ data }) => {
    console.log(data)
    const brands = [...new Set(data.map(item => item.make))];
    const prices = [...new Set(data.map(item => parseFloat(item.rentalPrice.replace(/\D/g, ''))))]
    .sort((a, b) => a - b);


    console.log( prices.sort((a, b) => a - b) );

 
    const { control, handleSubmit } = useForm();

    const onSubmit = (field) => {
      console.log(field);
    };

        return(
     <form onSubmit={handleSubmit(onSubmit)}>
      <label>Car brand</label>
      <Controller
        name="carBrand"
        render={({ field }) => (
          <Select
            {...field}
            options={brands.map(brand => ({ value: brand, label: brand }))}
            placeholder="Enter the text"
          />
        )}
        control={control}
        defaultValue=""
      />

<label>Price/ 1 hour</label>
      <Controller
        name="Price"
        render={({ field }) => (
          <Select
            {...field}
            options={prices.map(price => ({ value: price, label: price }))}
            placeholder="To $"
          />
        )}
        control={control}
        defaultValue=""
      />
      <input type="submit" />
    </form>
        )
    }
    