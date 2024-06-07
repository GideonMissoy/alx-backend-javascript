export default function getListStudentIds(rray) {
    if (Array.isArray(rray)) return rray.map((x) => x.id);
    return [];
  }