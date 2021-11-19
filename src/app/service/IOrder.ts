export interface IOrder{
    id:number;
    service:string;
    serviceId:number;
    user:string;
    userId:number;
    dateTime?:string;
    done:boolean;
    note:string;
    comment:string;
}
// public class Order
// {
//     public int Id { get; set; }
//     public Service Service { get; set; }
//     public int? ServiceId { get; set; }
//     public User User { get; set; }
//     public int? UserId { get; set; }
//     public bool Done { get; set; } = false;
//     public DateTime? DateTime { get; set; }
//     public string? Note { get; set; }
//     public string? Comment { get; set; }
// }