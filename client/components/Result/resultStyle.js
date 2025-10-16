
export default `
@import url('https://fonts.cdnfonts.com/css/eveleth');

.page {
    .card {
      &.environment {
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

        .descriptive {
          background: #DDD;
        }

        .source {
          font-size: 8px;
          color: #444;
          text-align: right;
          width: 100%;
        }
      }
    }
  }
}
`;