
var Article = document.querySelector("Article")
function getParameter(x){
    params= window.location.href.split("?")[1].split("&"); 
    for(i=0;i<params.length;i++){
        // ["id","example"]
        e = params[i].split("=");
        if(e[0] == x){
            return e[1];
        }
    }
}
var id = getParameter("id")
// login
if(id === "1deb1918-abd5-474f-9fc6-62262bb47224"){
    var dia = 
    `
      <section>
               <div class="upper">
                   <img src="/images/favicon/logo.png" alt="">
                   <h1 class="login">Login</h1>
                 </div>
                 <footer>
                    <div class="email">
                       <label for="email">email:</label>
                       <input type="email" name="email" id="email" placeholder="enter valid email" autocomplete="off">
                    </div>
                    <div class="password">
                       <label for="password">password:</label>
                       <input type="password" name="password" id="password" placeholder="enter valid password" autocomplete="off">
                    </div>
                    <div class="submit">
                       <input type="submit" value="Submit" id="sub">
                    </div>
                 </footer>
                 <main>
                  <p>dont have acount? <a href="./auth.html?id=1871ed54-c406-4468-83d3-db7450ddb490">register</a></p>
                 </main>
            </section>
    `
    Article.innerHTML = dia
}
// register
if(id === "1871ed54-c406-4468-83d3-db7450ddb490"){
    
    var dialog = 
   `
   <section style="height: fit-content;">
        <div class="upper">
            <img src="/images/favicon/logo.png" alt="">
            <h1 class="login">Register</h1>
          </div>
          <footer>
            <div class="email">
                <label for="username">username:</label>
                <input type="username" name="username" id="username" placeholder="enter valid username" autocomplete="off">
             </div>
             <div class="email">
                <label for="email">email:</label>
                <input type="email" name="email" id="email" placeholder="enter valid email" autocomplete="off">
             </div>
             <div class="password">
                <label for="password">password:</label>
                <input type="password" name="password" id="password" placeholder="enter valid password" autocomplete="off">
             </div>
             <div class="submit">
                <input style="cursor: pointer;" type="submit" value="Submit">
             </div>
          </footer>
          <main>
           <p>have acount? <a href="./auth.html?id=1deb1918-abd5-474f-9fc6-62262bb47224">login</a></p>
          </main>
     </section>
   `
   Article.innerHTML = dialog
}