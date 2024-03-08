import axios from "axios";

export const getData = async (valueCity: string) => {
    // setError({
    //   error: false,
    //   message: error.message,
    // });
    // setWeather({
    //   found: false,
    // })
    // try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${valueCity}`;
      const response = await axios({
        url: url,
        method: "GET",
      });
      const { data } = response;

    //   if (data.error) throw new Error (data.error.message);


      console.log(data);
 
    return data;
    // } catch (error) {
    //   const castError = (error as Error);
    //   console.log(error);
    // //   setError({
    // //     error: true,
    // //     message: castError.message,
    // //   });
    // }
  };