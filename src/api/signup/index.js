import {useMutation} from "react-query";
import {postSignup} from "@/api/signup/requests";

export const usePostSignup = () => useMutation(postSignup)
