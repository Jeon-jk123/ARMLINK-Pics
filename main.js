var images = ["https://pbs.twimg.com/profile_images/1264397849862733826/vifT4DA3_400x400.jpg","https://i.pinimg.com/736x/2d/29/c4/2d29c48584a7e01396fe9dd16af126c7.jpg", "https://i.pinimg.com/originals/0b/77/02/0b77020d55515fda5722fc1de8e35787.jpg","https://i.pinimg.com/736x/42/8c/2d/428c2d94a0221f7c524e4e8eab6f7261.jpg" , "https://i.pinimg.com/originals/85/db/51/85db51bc5340ed2cb432af044c6ace4d.jpg", "http://pm1.narvii.com/6816/de5ffadbe0e20d5b2cfd035ae00dbfdacf99b3bdv2_00.jpg", "https://pbs.twimg.com/media/D66fYBQV4AArOWR.jpg","https://i.pinimg.com/originals/b0/db/40/b0db4099ad70ec3d7defdee1bc5291fc.jpg","https://p.favim.com/orig/2019/02/14/jimin-aesthetic-park-jimin-Favim.com-6900261.jpg","https://i.pinimg.com/736x/e1/43/b2/e143b2f555337794508d1018d92ddb07.jpg","https://qph.fs.quoracdn.net/main-qimg-3eeeb4bc98b70dc180993c85ad638a09","https://i.pinimg.com/originals/9b/2a/44/9b2a44d9be651c53c1faa1e556323109.jpg","https://p.favim.com/orig/2018/07/23/kpop-lisa-blackpink-Favim.com-6066318.jpg"];
var names = ["Bangtan","BLACKPINK", "Jungkook", "Taehyung", "Namjoon", "Suga","Jin","Hobi","Jimin","Jisoo","Jennie","Rose","Lisa"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 12
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    document.getElementById("family_member_image").src = updatedImage;
    
    var updatedName = names[i] ;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
