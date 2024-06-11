import Axios from "../Axios";

const useToken = async () => {
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
    await useToken();
  } catch (error) {
    // If there is no session
    router.push("/sign-in");
    console.error("Error getting session:", error);
  }
};

export const isNotAuthenticated = async (router: any) => {
  try {
    // If there is session
    await useToken();
    router.push("/dashboard");
  } catch (error) {
    console.error("Error getting session:", error);
  }
};

export default useToken;
