import { AnnouncementModel } from "./AnouncementModel";

export class MyProfileModel{
    constructor(courseCount?, userName?, studentNumber?){

    }

    public courseCount: number;
    public userName: string;
    public studentNumber: string;

    public duyurular: AnnouncementModel[];
    
}
