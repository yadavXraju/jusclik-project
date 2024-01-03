export default function Attendance(){
    return(
        <DemoItem label="Controlled calendar">
  <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
</DemoItem>
    )
}