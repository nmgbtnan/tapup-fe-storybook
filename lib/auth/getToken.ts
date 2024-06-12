import Axios from "../Axios";

const getToken = async () => {
  try {
    const response = await Axios.get("/api/session");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};

export const isAuthenticated = async (router: any) => {
  try {
    await getToken()
    .then((res) => {
      router.push("/dashboard");
    });
  } catch (error) {
    // If there is no session
    router.push("/sign-in");
    console.error("Error getting session:", error);
  }
};


export default getToken;
