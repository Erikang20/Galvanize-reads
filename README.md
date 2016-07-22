List, Add, Modify and Delete Books.


=======================


<div class="container">
      <div class="row">
          <div class="col-md-6">
              <div class="card">
                  <img class="card-img-top" src="http://milestoneseducation.com/wp-content/uploads/2016/06/Books-bookshelf-person-head-540w.jpg" alt="Card image cap">
                      <div class="card-block">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary" ng-model="hideME" ng-click="showME()">Authors</a>
                      </div>
                    </div>

            <a href="#" class="pull-right btn btn-success" ng-if="hideME" ng-click="showPerson()" role="button"><i class="fa fa-plus-circle" aria-hidden="true"></i> New Author</a>
            <a href="/authors" class="pull-right btn btn-info" ng-if="hideME"  role="button"><i class="fa fa-users" aria-hidden="true"></i> View Authors</a>
          </div>

      <div class="col-md-6">
          <div class="card">
              <img class="card-img-top" src="http://az616578.vo.msecnd.net/files/2016/05/16/635990089599038074-2122984680_books.jpg" alt="Card image cap">
                <div class="card-block">
                  <p class="card-text">Looking for your favorite Book? Welcome to a whole new world!</p>
                    <a href="#" class="btn btn-primary" ng-model="showMe" ng-click="hide()">Books</a>
                </div>
            </div>
        </div>
    </div>

    <!-- button add new book -->
    <a href="#" class="pull-right btn btn-success" ng-if="showMe" ng-click="hideMe()" role="button"><i class="fa fa-plus-circle" aria-hidden="true"></i> New Book</a>
    <a href="/books" class="pull-right btn btn-info" ng-if="showMe"  role="button"><i class="fa fa-book" aria-hidden="true"></i> View Books</a>

  </div>
</div>


  <!-- add books -->
  <form name="newBooks" ng-if="hideForm" class="my-form" action="/books" method="POST" ng-hide="newBooks.$submitted" novalidate>
      <div class="form-group">
          <label for="title">Title: </label>
          <%# <span class="error" ng-show="userForm.title.$error.minlength" ng-class="{'has-error': userForm.title.$invalid && !userForm.title.$pristine, 'has-success': userForm.title.$valid}">A Title is Required to be at least 3 characters</span>%>
          <%# <input type="text" class="form-control" name="title" id="title" ng-model="book.title" ng-minlength="3" placeholder="Title" required>%>

          <%# <label for="author">Author</label>%>
          <%# <span class="error" ng-show="userForm.author.$error.required.$touched">An author is Required </span>%>
          <%# <input type="text" class="form-control" name="author" id="author" ng-model="book.author" placeholder="Author" required>%>

          <%# <label for="img">Image Url</label>%>
          <%# <span class="error" ng-show="userForm.img.$error.required.$touched ">Please introduce a valid URL </span>%>
          <%# <input type="url" class="form-control" name="img" id="img" ng-model="book.img" placeholder="Image Url" required>%>

          <%# <label for="genre">Genre</label>%>
          <%# <span class="error" ng-show="userForm.img.$error.required.$touched ">Please introduce a valid URL </span>%>
          <%# <input type="text" class="form-control" name="genre" id="genre" ng-model="book.genre" placeholder="Genre" required>%>


          <%# <label for="description">Description</label>
          <input type="text" class="form-control" name="description" id="description" ng-model="book.description" ng-minlength="3" ng-maxlength="200" placeholder="Description" required>%>
          <%# <span class="error" ng-show="userForm.description.$error.required.$touched">A description is Required </span>
          <span class="error" ng-show="userForm.description.$error.minlength">A description has to be at least 3 characters </span>
          <span class="error" ng-show="userForm.description.$error.maxlength">The description can't be longer than 200 characters </span>%>

          <%# <label for="comments">Comments </label>
          <input type="text" class="form-control" name="comments" id="comments" ng-model="book.comments" placeholder="Comments" required>

          <form action="/books" method="POST">

          <button ng-click="addBook()" class="btn btn-primary" type="submit" ng-disabled="newBooks.$pristine">Submit Post</button>
        </form>

      </div>
    </form>
%>

<%# newAuthor%>
    <%# <form name="newAuthor" ng-if="showAuthor" class="my-form" action="/authors" method="POST" ng-hide="newAuthor.$submitted" novalidate>
      <div class="form-group">
          <label for="fullName">Full Name: </label>%>
          <%# <span class="error" ng-show="userForm.title.$error.minlength" ng-class="{'has-error': userForm.title.$invalid && !userForm.title.$pristine, 'has-success': userForm.title.$valid}">A Title is Required to be at least 3 characters</span>%>
          <%# <input type="text" class="form-control" name="fullName" id="fullName" ng-model="author.fullName" ng-minlength="3" placeholder="Author Full Name" requir
          <label for="dob">D.O.B</label>%>
          <%# <span class="error" ng-show="userForm.author.$error.required.$touched">An author is Required </span>%>
          <%# <input type="date" class="form-control" name="dob" id="dob" ng-model="author.dob" placeholder="D.O.B" required>

          <label for="country">Country: </label>%>
          <%# <span class="error" ng-show="userForm.img.$error.required.$touched ">Please introduce a valid URL </span>%>
          <%# <input type="text" class="form-control" name="country" id="country" ng-model="author.country" placeholder="Country" required>

          <label for="img">Image Url: </label>%>
          <%# <span class="error" ng-show="userForm.img.$error.required.$touched ">Please introduce a valid URL </span>%>
          <%# <input type="url" class="form-control" name="img" id="img" ng-model="author.img" placeholder="Image Url" required>

          <label for="biography">Biography: </label>
          <input type="text" class="form-control" name="biography" id="biography" ng-model="author.biography" ng-minlength="3" ng-maxlength="200" placeholder="Biography" required>%>
          <%# <span class="error" ng-show="userForm.description.$error.required.$touched">A description is Required </span>%>
          <%# <span class="error" ng-show="userForm.description.$error.minlength">A description has to be at least 3 characters </span>%>
          <%# <span class="error" ng-show="userForm.description.$error.maxlength">The description can't be longer than 200 characters </span>%>

          <%# <label for="books">Books: </label>
          <input type="text" class="form-control" name="books" id="books" ng-model="author.books" placeholder="Books" required>
          <form action="/books" method="POST">

          <button ng-click="addBook()" class="btn btn-primary" type="submit" ng-disabled="newBooks.$pristine">Submit Post</button>
        </form>
      </div>
    </form>

    </body>
</html>%>
