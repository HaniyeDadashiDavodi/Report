import SpaIcon from "@mui/icons-material/Spa";
import DeleteIcon from "@mui/icons-material/Delete";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import ConstructionIcon from "@mui/icons-material/Construction";
const items = [
  {
    index: 1,
    header: "فضای سبز و درختان",
    description: "آسیب به درختان یا وضعیت نامناسب پارک",
    icon: <SpaIcon />,
  },
  {
    index: 2,
    header: "زباله و نظافت",
    description: "رها شدن زباله یا سطل های پر و آلوده",
    icon: <DeleteIcon />,
  },
  {
    index: 3,
    header: "دیوارنویسی و آلودگی بصری",
    description: "نوشته ها یا تبلیغات نازیبا روی دیوارها",
    icon: <WbCloudyIcon />,
  },
  {
    index: 4,
    header: "روشنایی معابر",
    description: "چراغ خاموش یا نور ناکافی در خیابان",
    icon: <EmojiObjectsIcon />,
  },
  {
    index: 5,
    header: "ایمنی و خطرات شهری",
    description: "محل ناایمن مثل چاه باز یامانع خطرناک",
    icon: <SportsScoreIcon />,
  },
  {
    index: 6,
    header: "خرابی و آسیب دیدگی",
    description: "چاله، جدول شکسته یا تجهیزات خراب",
    icon: <ConstructionIcon />,
  },
];
export default items;
