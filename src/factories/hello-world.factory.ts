import { HelloWorldService } from "@/services";

export function helloWorldFactory(): HelloWorldService {
	return new HelloWorldService();
}
