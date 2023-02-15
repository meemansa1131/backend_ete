import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
{/* 
    { /*Main jumbotron for a primary marketing message or call to action*/ }
    {/*  <div className="jumbotron">
      <h1 className="display-3">Welcome!</h1>
      <p>This is a </p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Look the blog posts &raquo;</Link></p>
    </div> 

    { /*Example row of columns*/ }
    <div className="row text-justify">
      <div className="col-md-4">
        <h2 >Does your cat...</h2>
        <h5>...judge you? </h5>
        <p>According to the New York Post, cat behavior consultant Marilyn Krieger explained, “Cats are not judgmental, there might be other things causing that expression. Perhaps the cat is feeling cornered, or there's another cat nearby, or maybe there's a slight pain, or another animal.
            Clearly, cats are good at visual recognition — except when it comes to human faces. Instead of facial recognition, cats may use other cues, like our scent, the way we feel, or the sound of our voices to identify us....</p>
      </div>
      <div className="col-md-4">
        <h2>Does your cat...</h2>
        <h5>...looks like hitler?</h5>
        <p>The Internet is full of pictures of Kitlers cats unfortunate enough to have a black and white pattern on their furs vaguely resembling the facial hair of the leader of Nazi Germany.A new study suggests that the feline führers’ coat is determined by a faulty gene determining their pattern still in the womb of mother cat.Called piebald, the pattern – typically a distribution of two colors on an animal’s coat of fur – occurs when pigment cells fail to follow genetic “instructions” at a very early stage of development....</p>
      </div>
      <div className="col-md-4">
        <h2>Does your cat...</h2>
        <h5>...wants to kill you?</h5>
        <p>For people in the 43 million U.S. households with domestic cats, there's good news: Your cat doesn't really want to kill you.Recent media headlines like "Your cat may want to kill you, study finds" and "Bad news, your cat probably wants to kill you" suggest that our feline companions have aggressive thoughts toward us. That, like big cats, our mini-cats are predators that want to kill us, too.It's not the first time cats have garnered a bad rap in the media. Cats do kill birds and small mammals, but the exaggeration of the numbers has been a problem, as Vox Felina blogger Peter J. Wolf notes. And the sensationalist "cats may want to kill you" meme is even worse....</p>
      </div>
    </div>

  </div>
);