import { FileModel } from "./FileModel";
import { AnnouncementModel } from "./AnouncementModel";

export class CourseDetailModel{
    constructor(){
        
    }

    files: FileModel[];
    announcements: AnnouncementModel[];

    courseClassroomID: number;
    floorNum: string;
    classRoomName: string;
    instractorName: string;
    courseCode: string;
    courseName: string;
    participatedCount: number;
}