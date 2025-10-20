
export default `
@import url('https://fonts.cdnfonts.com/css/eveleth');
/* @import MUST go on the first line of the Style Editor */

.page {
    .card {
      background: white;
      border: 1px solid black;
      border-radius: 5px;
      padding: 10px 10px 15px;

      font-family: Lato;
      font-size: 11px;

      h1,h2 {
        color: black;
        font-family: Eveleth;
      }

      h1 {
        font-size: 16px;
        margin-bottom: 4px;


        &+p:first-letter {
          all: unset;
        }

        &+p:first-line {
          all: unset;
        }
      }

      h2 {
        font-size: 14px;
      }

      hr {
        visibility: visible;
        border-width: 0;
        border-top: 1px dashed lightgrey;
      }

      .descriptive {
        background: #DDD;
        &+* {
          margin-top: 8px;
        }
      }

      .source {
        font-size: 8px;
        color: #444;
        text-align: right;
        width: 100%;
      }
      &.environment {
        .questions {
          margin-top: inherit;
        }
      }
      &.adversary {
        background: #DDD;
        
        .descriptive {
          background: #FFF;
          border-width: 1px 0px;
          border-image: none;
          padding: 5px;
          font-size: 12px;
          line-height: 1.2em;
        }
      }
      &.weapon {
        hr {
          border-top: 1px solid black;
        }
      }
    }
  }
}
`;