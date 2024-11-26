import windowsAndDoorsImage from '../images/windows-and-doors.jpg';
import pergolasImage from '../images/Pergolas.jpg';
import fencesAndGatesImage from '../images/Fences-and-gates.jpg';
import Avatar1 from '../images/avatars/animoji.png'
import Avatar2 from '../images/avatars/animoji-1.png'
import Avatar3 from '../images/avatars/animoji-2.png'
import Avatar4 from '../images/avatars/animoji-3.png'
import Avatar5 from '../images/avatars/animoji-4.png'
import Avatar6 from '../images/avatars/animoji-5.png'
import Avatar7 from '../images/avatars/animoji-6.png'
import about from '../images/about.jpg'

import gallery1 from '../images/gallery/image1.jpg'
import gallery2 from '../images/gallery/image2.jpg'
import gallery3 from '../images/gallery/image3.jpg'
import gallery4 from '../images/gallery/image4.jpg'
import gallery5 from '../images/gallery/image5.jpg'
import gallery6 from '../images/gallery/image6.jpg'

export const data = 
{
    navbar : {
        titles:[
            {title:'בית', route:'/'},
            {title:'אודות',route:'/about'},
            {title:'גלריה',route:'/gallery'},
            {title:'פרויקטים',route:'/projects'},
            {title:'שירותים',route:'/services'},
            {title:'צור קשר',route:'/contact'},  
             
        ],
        phoneNumber : ' חייגו עכשיו 052-4224393'
    },
    hero : {
        title:'פתרונות אלומיניום בהתאמה אישית לכל פרוייקט',
        button:'צור קשר',
        
    },
    banner:{title: 'מעוניינים בפרטים נוספים? קבלו הצעת מחיר ללא התחייבות!',
        form:[{title:'*איך קוראים לך?',key:'name'},{title:'*מה הטלפון שלך?',key:'phone'},{title:'*מאיפה בארץ?',key:'location'}],
        submit:'שליחת פרטים'},

    about:{title:'אודותינו:',desc:'“אנחנו חברת אלומיניום בעלת ניסיון של כ-40 שנה ביצירת פתרונות אלומיניום בהתאמה אישית. אנו מתמחים בעיצוב וייצור חלונות ודלתות אלומיניום, פרגולות, גדרות ושערים ברמה הגבוהה ביותר. צוות המומחים שלנו מחויב לספק שירות אישי ומקצועי, ולוודא שכל פרויקט מתבצע ביסודיות ומקצועיות עד לפרט האחרון. אנו גאים בשירות האישי והמקצועי שאנו מעניקים ללקוחותינו, וביכולתנו להציע פתרונות ייחודיים ומותאמים אישית לכל צורך.”',image:about},

    products:[
        {title : 'חלונות ודלתות' , description: 'חלונות ודלתות מעוצבים בהתאמה אישית, באיכות גבוהה ובאסתטיקה מרהיבה.', image : windowsAndDoorsImage},

        {title : 'פרגולות' , description: 'פרגולות מאלומיניום בעיצובים ייחודיים, לעמידות מקסימלית וליופי מתמשך.', image : pergolasImage},

        {title : 'גדרות ושערים' , description: 'גדרות ושערים מאלומיניום בעיצובים מודרניים ועמידים, המספקות פרטיות ובטיחות.', image : fencesAndGatesImage}     
    ],
    Recommendations:[
        {name: 'אורי ביו', description: 'השירות היה מצוין והעבודה מקצועית ביותר. ממליצה בחום!”',image:Avatar1},
        {name: 'דנה לוי', description: 'עבודה נהדרת, איכות גבוהה ושירות מעולה. ממליץ לכולם!”',image:Avatar2},
        {name: 'יוסי כהן', description: 'תוצאה מושלמת ושירות אישי ומקצועי. לא יכולתי לבקש יותר טוב מזה!”',image:Avatar3},
        {name: 'נועה שמעוני', description: 'עבודה מדויקת ונקייה, כל הכבוד על ההשקעה והמקצועיות.”',image:Avatar4},
        {name: 'רונית גולדשטיין', description: 'השירות היה מעל ומעבר לציפיות שלי. אני ממליצה בחום רב!”',image:Avatar5},
        {name: 'גיא שרון', description: 'מוצר איכותי ושירות מהיר ויעיל. ללא ספק אמליץ לאחרים.”',image:Avatar6},
        {name: 'מירב כץ', description: 'תוצאה מעולה ושירות נעים ומקצועי. אין מילים, פשוט מושלם!”',image:Avatar7},
        {name: 'דנה לוי', description: 'עבודה נהדרת, איכות גבוהה ושירות מעולה. ממליץ לכולם!”',image:Avatar2},
        {name: 'יוסי כהן', description: 'תוצאה מושלמת ושירות אישי ומקצועי. לא יכולתי לבקש יותר טוב מזה!”',image:Avatar3}
    ],
    gallery :
    [
        {title:'תל-אביב' , name:'אורי ביו', description:'חלונות ודלתות בעיצוב בלגי', img:gallery1},
        {title:'רמת גן' , name:'ירדן דהן', description:'חלונות ודלתות בעיצוב בלגי', img:gallery2},
        {title:'גדרה' , name:'בר כהן', description:'חלונות ודלתות בעיצוב בלגי', img:gallery3},
        {title:'ראשון' , name:'דביר מדר', description:'חלונות ודלתות בעיצוב בלגי', img:gallery4},
        {title:'באר-שבע' , name:'אהוד רדיע', description:'חלונות ודלתות בעיצוב בלגי', img:gallery5},
        {title:'חולון' , name:'מתן עופרי', description:'חלונות ודלתות בעיצוב בלגי', img:gallery6},
    ]
}