import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac',
  templateUrl: './tic-tac.component.html',
  styleUrls: ['./tic-tac.component.scss']
})
export class TicTacComponent implements OnInit {

  player_one_name: any;
  player_two_name: any;

  tictac: any = [
    { id: 1, player: '' },
    { id: 2, player: '' },
    { id: 3, player: '' },
    { id: 4, player: '' },
    { id: 5, player: '' },
    { id: 6, player: '' },
    { id: 7, player: '' },
    { id: 8, player: '' },
    { id: 9, player: '' },
  ];

  player1: any = '*';
  player2: any = 'o';
  flag = true;
  winner: any;
  losser: any;
  IsDisabled: any = false;
  count: number = 0;

  ticTacClick(item, index) {
    if (this.flag) {
      item.player = this.player1;
      this.flag = false;
      this.checkPlayer_One();
    } else {
      item.player = this.player2;
      this.flag = true;
      this.checkPlayer_Two();
    };
    this.IsDisabled = true;
    this.checkIfTie();
  };

  checkPlayer_One() {
    let tictac = this.tictac;
    switch (true) {
      //#region 1,2,3 
      case ((tictac[0].id == 1 && tictac[0].player == this.player1) &&
        (tictac[1].id == 2 && tictac[1].player == this.player1) &&
        (tictac[2].id == 3 && tictac[2].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#endregion
      //#region 4,5,6 
      case ((tictac[3].id == 4 && tictac[3].player == this.player1) &&
        (tictac[4].id == 5 && tictac[4].player == this.player1) &&
        (tictac[5].id == 6 && tictac[5].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#endregion
      //#region 7,8,9 
      case ((tictac[6].id == 7 && tictac[6].player == this.player1) &&
        (tictac[7].id == 8 && tictac[7].player == this.player1) &&
        (tictac[8].id == 9 && tictac[8].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#region 1,4,7
      case ((tictac[0].id == 1 && tictac[0].player == this.player1) &&
        (tictac[3].id == 4 && tictac[3].player == this.player1) &&
        (tictac[6].id == 7 && tictac[6].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#endregion
      //#region 2,5,8
      case ((tictac[1].id == 2 && tictac[1].player == this.player1) &&
        (tictac[4].id == 5 && tictac[4].player == this.player1) &&
        (tictac[7].id == 8 && tictac[7].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#endregion
      //#region 3,6,9
      case ((tictac[2].id == 3 && tictac[2].player == this.player1) &&
        (tictac[5].id == 6 && tictac[5].player == this.player1) &&
        (tictac[8].id == 9 && tictac[8].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#endregion
      //#region 1,5,9
      case ((tictac[0].id == 1 && tictac[0].player == this.player1) &&
        (tictac[4].id == 5 && tictac[4].player == this.player1) &&
        (tictac[8].id == 9 && tictac[8].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#endregion
      //#region 3,5,7
      case ((tictac[2].id == 3 && tictac[2].player == this.player1) &&
        (tictac[4].id == 5 && tictac[4].player == this.player1) &&
        (tictac[6].id == 7 && tictac[6].player == this.player1)):
        this.one_Player_Winner();
        break;
      //#endregion
      default:
        break;
    }
  };

  checkPlayer_Two() {
    let tictac = this.tictac;
    switch (true) {
      //#region 1,2,3 
      case ((tictac[0].id == 1 && tictac[0].player == this.player2) &&
        (tictac[1].id == 2 && tictac[1].player == this.player2) &&
        (tictac[2].id == 3 && tictac[2].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      //#region 4,5,6 
      case ((tictac[3].id == 4 && tictac[3].player == this.player2) &&
        (tictac[4].id == 5 && tictac[4].player == this.player2) &&
        (tictac[5].id == 6 && tictac[5].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      //#region 7,8,9 
      case ((tictac[6].id == 7 && tictac[6].player == this.player2) &&
        (tictac[7].id == 8 && tictac[7].player == this.player2) &&
        (tictac[8].id == 9 && tictac[8].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      //#region 1,4,7
      case ((tictac[0].id == 1 && tictac[0].player == this.player2) &&
        (tictac[3].id == 4 && tictac[3].player == this.player2) &&
        (tictac[6].id == 7 && tictac[6].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      //#region 2,5,8
      case ((tictac[1].id == 2 && tictac[1].player == this.player2) &&
        (tictac[4].id == 5 && tictac[4].player == this.player2) &&
        (tictac[7].id == 8 && tictac[7].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      //#region 3,6,9
      case ((tictac[2].id == 3 && tictac[2].player == this.player2) &&
        (tictac[5].id == 6 && tictac[5].player == this.player2) &&
        (tictac[8].id == 9 && tictac[8].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      //#region 1,5,9
      case ((tictac[0].id == 1 && tictac[0].player == this.player2) &&
        (tictac[4].id == 5 && tictac[4].player == this.player2) &&
        (tictac[8].id == 9 && tictac[8].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      //#region 3,5,7
      case ((tictac[2].id == 3 && tictac[2].player == this.player2) &&
        (tictac[4].id == 5 && tictac[4].player == this.player2) &&
        (tictac[6].id == 7 && tictac[6].player == this.player2)):
        this.two_Player_Winner()
        break;
      //#endregion
      default:
        break;
    }
  };

  one_Player_Winner() {
    this.winner = 1;//`${this.one_Player_Winner}  You are winner.`;
    this.losser = 2;//`${this.two_Player_Winner}  You are looser.`;
  };

  two_Player_Winner() {
    this.winner = 2;//`${this.two_Player_Winner}  You are winner.`;
    this.losser = 1;//`${this.one_Player_Winner}  You are looser.`;
  };

  checkIfTie() {
    this.count = 0;
    this.tictac.map(x => {
      if (x.player) {
        this.count++;
      }
    });
    console.log('count:', this.count)
    // if (this.count == 9) {
    // }
  };

  resetGame() {
    this.tictac = [
      { id: 1, player: '' },
      { id: 2, player: '' },
      { id: 3, player: '' },
      { id: 4, player: '' },
      { id: 5, player: '' },
      { id: 6, player: '' },
      { id: 7, player: '' },
      { id: 8, player: '' },
      { id: 9, player: '' },
    ];
    this.winner = '';
    this.losser = '';
    this.IsDisabled = false;
    this.player_one_name = '';
    this.player_two_name = '';
    this.count = 0;
  };

  constructor() { }

  ngOnInit() {
  }

}
