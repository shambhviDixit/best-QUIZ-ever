class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton(' WANT SOME MORE?');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.option5 = createElement('h3');
    this.option6 = createElement('h2');
    this.option7 = createElement('h3');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();

    this.input2.hide();
 

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(550, 0);
//debug the syntax below to display the question
     this.question .html("Question:- How Does A Bee Go To School? " );
    
    this.question.position(150, 80);
    this.option1.html("1: On a SuperBee " );
    this.option1.position(150, 120);
    this.option2.html("2:On A Jet" );
    this.option2.position(150, 160);
    this.option3.html("3: On A School Buzz " );
    this.option3.position(150, 200);
    this.option4.html("4:On A BumbleBee" );
    this.option4.position(150, 240);

    this.input1.position(300, 320);
    this.input2.position(550, 320);
    this.button.position(495, 390);
    this.button2.position(300, 500);
    this.button.mousePressed(()=>{
      
   
//correct the syntac below to display the thank you message and position 
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(350,500);

      this.hide();

    });

    this.button2.mousePressed(()=>{

            this.message.html("QUESTION:What Does A House Wear?");
            this.message.position(300,550);
            this.option5.html("Ad-dress" );
            this.option5.position(300, 590);
            this.option6.html("QUESTION:Why Did The Fly Never Land On The Computer?" );
            this.option6.position(300, 650);
            this.option7.html("It Was Afraid Of The World Wide Web" );
            this.option7.position(300, 690);
          });
  }
}
