/**
 * Created by montionugera on 12/18/16.
 */
//http://www.endmemo.com/events/2013.php
function getMajorEvents() {
    var events = [

        {
            event_name: "Years 2007 - 2009: The Global Recession and the Collapse of Wall Street :" +
            " In September of 2008, a seemingly perfect storm of factors came together to precipate the " +
            "deepest economic downturn in not only the U.S., but across the globe, since the Great Depression. " +
            "The great investment banks that had stood on Wall Street began to collapse due to the sub-prime " +
            "mortgage crisis and serious corporate fraud. During the last months of the Bush Administration, " +
            "the federal government stepped in to bail out some of these institutions in order to keep the U.S. " +
            "financial system afloat."
            , date: "09-01-2008", quarter: "2008-Q3"
        },
        {
            event_name: 'On 6 September 2012,the ECB calmed financial markets by ' +
                'announcing free unlimited support for all eurozone countries'
            , date: "09-06-2012", quarter: "2012-Q3"
        },

        {
            event_name: "Dow Drops 50% in 17 Months : Between October 9, 2007 and March 6, 2009, " +
            "the Dow Jones Industrial Average dropped 50%. This was the worst decline since the Great " +
            "Depression, when the Dow fell 80%. However, it occurred in only 17 months, while the Great " +
            "Depression drop took three years."
            , date: "03-06-2009", quarter: "2009-Q1"
        },


        {
            event_name: "$700 Billion Bank Bailout Bill : On September 18, 2008, Treasury Secretary " +
            "Hank Paulson and Federal Reserve Chairman Ben Bernanke asked Congress for the largest bailout " +
            "package since the Great Depression. By October 3, the Senate passed the $700 billion " +
            "bailout bill, now known as the TARP program. The program was initially designed to purchase " +
            "toxic mortgages from banks, freeing up cash for more loans. However, it was taking too long to " +
            "implement, so on October 14, the Treasury used $350 billion for the Capital Repurchase Program, " +
            "which purchased preferred stock in major banks."
            , date: "09-18-2008", quarter: "2008-Q3"
        },

        {
            event_name: "The Day the Global Banking System Stopped Working : On Wednesday September 17, " +
            "banks withdrew $160 billion from ultra-safe money market accounts. Banks were hoarding cash " +
            "for write-downs on bad mortgages and withdrawals in bank runs. By the end of the week, banks " +
            "held $190 billion in cash, as opposed to a normal $2 billion reserve. Hoarding led to an increase " +
            "in LIBOR, which affects $360 trillion in loans and credit card assets. " +
            "The credit freeze led to a cash shortage for most businesses. In response, " +
            "the Federal Reserve lowered interest rates to zero, reducing LIBOR. However, " +
            "banks continue to hoard cash today to write down foreclosures."
            , date: "09-17-2008", quarter: "2008-Q3"
        },


        {
            event_name: "AIG Bailout : On Monday, September 15, 2008, Lehman Brothers announced bankruptcy. " +
            "This was the day after Treasury Secretary Paulson said no more bailouts. " +
            "He refused government protection for Lehman's $60 billion in uncertain mortgage " +
            "assets in a weekend negotiation with potential buyers Barclay's and Bank of America. " +
            "At the time, he thought the amount was too much, and he was being pressured to keep the " +
            "government off the hook. Now, it seems like small potatoes. Lehman's Brothers bankruptcy " +
            "panicked global bankers, leading to The Great Recession."
            , date: "09-15-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Lehman Brothers Collapse : On Tuesday, September 16, AIG, the world's " +
            "largest insurance company, announced it was going bankrupt. Federal Reserve Chairman " +
            "Ben Bernanke said that AIG's bailout made him more angry than anything else in the recession. " +
            "Like a hedge fund, AIG took risks with unregulated products, such as credit default swaps. " +
            "It wrongly used cash from people's insurance policies. The Fed stepped in to avoid the collapse " +
            "of the $3.6 trillion money-market fund industry, which invested in AIG debt and securities. " +
            "Most mutual funds also owned AIG stock."
            , date: "09-16-2008", quarter: "2008-Q3"
        },

        {
            event_name: "$787 Billion Stimulus Package : By the time the Obama Administration reached " +
            "the White House in January of 2009, the economy had contracted and the recession had taken " +
            "hold. At the end of 2009, there are signs of recovery, but it may be long, slow, and painful."
            , date: "01-01-2009", quarter: "2009-Q1"
        },

        {
            event_name: "By July 2009, over $179 billion was allocated to Federal agencies. It was only " +
            "supposed to spend $185 billion in 2009. It was designed to increase GDP growth by 1.4%-3.8% " +
            "by the end of 2009, and prevent 2.3 million job losses. In Q3 2009, the economy would have " +
            "only grown .7%, not 2.8%, without the Economic Stimulus Program."
            , date: "07-01-2009", quarter: "2009-Q3"
        },


        {
            event_name: "President Bush Confirms Spying on Americans."
            , date: "12-17-2005", quarter: "2005-Q4"
        },

        {
            event_name: "South Korea Hwang Woo-suk falsified in stem cell research."
            , date: "11-15-2005", quarter: "2005-Q4"
        },

        {
            event_name: "Bush Nominates Ben Bernanke Successor to Alan Greenspan."
            , date: "10-24-2005", quarter: "2005-Q4"
        },

        {
            event_name: "NASA Releases Plan for Moon Visit."
            , date: "09-19-2005", quarter: "2005-Q3"
        },

        {
            event_name: "Costliest Hurricane of All Time : On August 29, 2005, Hurricane Katrina hit land, " +
            "causing economic losses of $125 billion. Only $66 billion of this was insured. Half of the " +
            "losses were a result of flooding in New Orleans. It caused GDP growth to drop from 3.8% in " +
            "Q3 to 1.3% in Q4. It affected 19% of U.S. oil production and caused oil prices to rise $3 a barrel."
            , date: "08-28-2005", quarter: "2005-Q3"
        },

        {
            event_name: "Crew of Russian Submarine Rescued."
            , date: "08-07-2005", quarter: "2005-Q3"
        },

        {
            event_name: "Four coordinated terrorist attacks in London."
            , date: "07-07-2005", quarter: "2005-Q3"
        },

        {
            event_name: "London UK Selected Hosting 2012 Olympic Summer Games."
            , date: "07-06-2005", quarter: "2005-Q3"
        },

        {
            event_name: "Syria Withdrawal from Lebanon."
            , date: "04-30-2005", quarter: "2005-Q2"
        },

        {
            event_name: "Ecuadors Congress Ousted President."
            , date: "04-21-2005", quarter: "2005-Q2"
        },

        {
            event_name: "Pope John Paul II Dies, Benedict XVI Became the New Pope."
            , date: "04-02-2005", quarter: "2005-Q2"
        },

        {
            event_name: "China Passed Anti-Secession Law on Taiwan."
            , date: "03-14-2005", quarter: "2005-Q1"
        },

        {
            event_name: "Lebanon Former Primer Minister Rafik Hariri Assasinated."
            , date: "02-15-2005", quarter: "2005-Q1"
        },

        {
            event_name: "North Korea Admits Having Nuclear Weapons."
            , date: "02-10-2005", quarter: "2005-Q1"
        },

        {
            event_name: "Nepalese King Fires Government."
            , date: "02-02-2005", quarter: "2005-Q1"
        },

        {
            event_name: "European Spacecraft Landed on Saturn Moon Titan."
            , date: "01-16-2005", quarter: "2005-Q1"
        },

        {
            event_name: "Abbas Wins Palestine Election in a Landslide."
            , date: "01-09-2005", quarter: "2005-Q1"
        },

        {
            event_name: "Tsunami Relief Pours into Asia."
            , date: "01-01-2005", quarter: "2005-Q1"
        },

        {
            event_name: "Iraq Ousted President Saddam Hussein Excuted."
            , date: "12-30-2006", quarter: "2006-Q4"
        },

        {
            event_name: "Fighting Breaks Out in Somalia with Ethiopia Troops Invasion."
            , date: "12-15-2006", quarter: "2006-Q4"
        },

        {
            event_name: "Lebanese Minister Pierre Gemayel Assassinated."
            , date: "11-21-2006", quarter: "2006-Q4"
        },

        {
            event_name: "U.S. Defense Secretary Donald Rumsfeld Resigns, Robert Gates Becomes Successor."
            , date: "11-08-2006", quarter: "2006-Q4"
        },

        {
            event_name: "U.S. Passed Legislation Building Border Fence along the Mexico Border."
            , date: "10-26-2006", quarter: "2006-Q4"
        },

        {
            event_name: "Thailand Military Coup, Prime Minister Thaksin Shinawatra Ousted."
            , date: "09-20-2006", quarter: "2006-Q3"
        },

        {
            event_name: "Iran Ignores UN Security Council Deadline with Enriching Uranium."
            , date: "08-31-2006", quarter: "2006-Q3"
        },

        {
            event_name: "Pluto Redifined a Dwarf Planet by Scientists."
            , date: "08-24-2006", quarter: "2006-Q3"
        },

        {
            event_name: "Dell Recalls Millions of Computer Batteries Which may Catch Fire."
            , date: "08-14-2006", quarter: "2006-Q3"
        },

        {
            event_name: "Hezbollah Opens New Front in Middle East."
            , date: "07-26-2006", quarter: "2006-Q3"
        },

        {
            event_name: "Bombs Kill Hundreds on Trains in India."
            , date: "07-11-2006", quarter: "2006-Q3"
        },

        {
            event_name: "Somalia Islamists Take Control of Mogadishu."
            , date: "06-05-2006", quarter: "2006-Q2"
        },

        {
            event_name: "Montenegro Independence."
            , date: "05-21-2006", quarter: "2006-Q2"
        },

        {
            event_name: "U.S. to Renew Ties to Libya."
            , date: "05-15-2006", quarter: "2006-Q2"
        },

        {
            event_name: "North Korea Test Fires Missiles."
            , date: "05-07-2006", quarter: "2006-Q2"
        },

        {
            event_name: "Bolivia Nationalizes Natural Gas Industry."
            , date: "05-02-2006", quarter: "2006-Q2"
        },

        {
            event_name: "Former Yogoslavia President Slobodan Milosevic Dies in Prison."
            , date: "03-11-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Philippine Mudslide Kills Thousands in Guinsaugon."
            , date: "02-17-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Protests Over Cartoons Turn Violent in the Muslim World."
            , date: "02-05-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Egypt Ferry Accident Kills Hundreds off Egyptian Coast."
            , date: "02-03-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Hamas Prevails in Elections."
            , date: "01-26-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Spacecraft Heads to Pluto."
            , date: "01-19-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Dow Jones Industrial Average Tops 11,000."
            , date: "01-09-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Iraq Insurgents Launch Massive Attacks with Sectarian Violence."
            , date: "01-04-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Sharon Suffers Massive Stroke."
            , date: "01-04-2006", quarter: "2006-Q1"
        },

        {
            event_name: "Benazir Bhutto Killed in Suicide Attack."
            , date: "12-27-2007", quarter: "2007-Q4"
        },

        {
            event_name: "The UN Climate Change Conference held in Bali, Indonesia."
            , date: "12-14-2007", quarter: "2007-Q4"
        },

        {
            event_name: "Algerian capital Algiers suffers 2 bomb blasts, 31 killed."
            , date: "12-11-2007", quarter: "2007-Q4"
        },

        {
            event_name: "Moscow and St. Petersburg police break up anti-Putin demonstrations."
            , date: "11-24-2007", quarter: "2007-Q4"
        },

        {
            event_name: "Benazir Bhutto return Pakistan encountered Suicide Bomb Attack."
            , date: "10-19-2007", quarter: "2007-Q4"
        },

        {
            event_name: "North and South Korea leaders meet for the second time."
            , date: "10-02-2007", quarter: "2007-Q4"
        },

        {
            event_name: "Israel Air Strike Syrias Nuclear Reactor."
            , date: "09-17-2007", quarter: "2007-Q3"
        },

        {
            event_name: "The Burj Dubai surpassing the Toronto CN Tower as the world tallest free " +
            "standing structure."
            , date: "09-13-2007", quarter: "2007-Q3"
        },

        {
            event_name: "British troops withdraw from the Basra region of Iraq."
            , date: "09-03-2007", quarter: "2007-Q3"
        },

        {
            event_name: "U.S. aircraft carries 6 nuclear warheads accidently flies from ND to LA."
            , date: "08-30-2007", quarter: "2007-Q3"
        },

        {
            event_name: "Russia resumes the flight exercises of its strategic bombers."
            , date: "08-17-2007", quarter: "2007-Q3"
        },

        {
            event_name: "Iraq suicide bombings kill 572 in Qahtaniya."
            , date: "08-14-2007", quarter: "2007-Q3"
        },

        {
            event_name: "Phoenix Mars Lander Blast Off."
            , date: "08-06-2007", quarter: "2007-Q3"
        },

        {
            event_name: "U.S. Minneapolis bridge collapsed over Mississippi river, 13 killed."
            , date: "08-01-2007", quarter: "2007-Q3"
        },

        {
            event_name: "India and US Reach Accord on Civilian Nuclear Power."
            , date: "07-29-2007", quarter: "2007-Q3"
        },

        {
            event_name: "England and Russia expel diplomats of each other."
            , date: "07-19-2007", quarter: "2007-Q3"
        },

        {
            event_name: "Sarkozy wins french presidential election."
            , date: "05-06-2007", quarter: "2007-Q2"
        },

        {
            event_name: "Shooting rampage in Virginia Tech Kills 32."
            , date: "04-16-2007", quarter: "2007-Q2"
        },

        {
            event_name: "Algerian capital Algiers suffers 2 bomb blasts, 33 killed. Al Qaeda claims " +
            "responsibility."
            , date: "04-11-2007", quarter: "2007-Q2"
        },

        {
            event_name: "Ukrainian President dissolved parliament."
            , date: "04-02-2007", quarter: "2007-Q2"
        },

        {
            event_name: "Northern Ireland reach historic agreement."
            , date: "04-01-2007", quarter: "2007-Q2"
        },

        {
            event_name: "British Sailors detained by Iran."
            , date: "03-26-2007", quarter: "2007-Q1"
        },

        {
            event_name: "Palestinians forms unity government."
            , date: "03-19-2007", quarter: "2007-Q1"
        },

        {
            event_name: "Cheney escapes assassination attempt in Afganstan."
            , date: "02-27-2007", quarter: "2007-Q1"
        },

        {
            event_name: "Palestinian factions fighting escalates."
            , date: "02-02-2007", quarter: "2007-Q1"
        },

        {
            event_name: "Baghdad market blast, over one hundred killed."
            , date: "01-22-2007", quarter: "2007-Q1"
        },

        {
            event_name: "China tests ballistic missile capable of destroying satellites in orbit."
            , date: "01-11-2007", quarter: "2007-Q1"
        },

        {
            event_name: "Thailand rocked by bombs."
            , date: "01-07-2007", quarter: "2007-Q1"
        },

        {
            event_name: "Ban Ki-moon of South Korea becomes the new United Nations Secretary-General."
            , date: "01-01-2007", quarter: "2007-Q1"
        },

        {
            event_name: "Bush Farewell Visiting to Iraq Encountered Shoe Thrower."
            , date: "12-14-2008", quarter: "2008-Q4"
        },

        {
            event_name: "Greece Riot after cops kill boy."
            , date: "12-07-2008", quarter: "2008-Q4"
        },

        {
            event_name: "Mexico Drug War Military Take Over Police."
            , date: "12-04-2008", quarter: "2008-Q4"
        },

        {
            event_name: "Protest in Thailand, Airport Occupied."
            , date: "11-27-2008", quarter: "2008-Q4"
        },

        {
            event_name: "Mumbay Attacks Kill Hundreds."
            , date: "11-27-2008", quarter: "2008-Q4"
        },

        {
            event_name: "Indians First Time Planted Their Flag on the Moon."
            , date: "11-15-2008", quarter: "2008-Q4"
        },

        {
            event_name: "Barack Obama Elected as the U.S. President."
            , date: "11-04-2008", quarter: "2008-Q4"
        },

        {
            event_name: "North Korea Denuclearization, Blows up Tower at Nuclear Site."
            , date: "10-12-2008", quarter: "2008-Q4"
        },

        {
            event_name: "China Manned Satellite Shenzhou-7 with Chinas First Spacewalk."
            , date: "09-25-2008", quarter: "2008-Q3"
        },

        {
            event_name: "The Large Hadron Collider, Big Bang experiment inaugurated."
            , date: "09-11-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Global Financial Crisis, US Approves 700B Financial Rescue Plan."
            , date: "09-07-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Bolivian President Survives Recall Referendum."
            , date: "08-11-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Beijing Olympic Games Great Success."
            , date: "08-08-2008", quarter: "2008-Q3"
        },

        {
            event_name: "South Ossertia War, Russia Invade Georgia."
            , date: "08-08-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Nepal Holds Historic Election, Monarchy Abolished."
            , date: "07-24-2008", quarter: "2008-Q3"
        },

        {
            event_name: "US troops surge in Iraq."
            , date: "07-24-2008", quarter: "2008-Q3"
        },

        {
            event_name: "International Court Issues Arrest for Sudanese President."
            , date: "07-13-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Zimbabwe Election President Robert Mugabe Reelected."
            , date: "07-08-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Bill Gates Retired from Microsoft."
            , date: "07-07-2008", quarter: "2008-Q3"
        },

        {
            event_name: "Phoenix Mars Lander Found Ice and Snowing on Mars."
            , date: "06-20-2008", quarter: "2008-Q2"
        },

        {
            event_name: "South Koreas Protest of Importing America Beef."
            , date: "06-11-2008", quarter: "2008-Q2"
        },

        {
            event_name: "Taiwan Elects New President, Pledges Better Relations with China."
            , date: "05-20-2008", quarter: "2008-Q2"
        },

        {
            event_name: "China Sichuan Earthquake Kills Tens of Thousands."
            , date: "05-12-2008", quarter: "2008-Q2"
        },

        {
            event_name: "Russian New President Dmitri Medvedev Sworn In."
            , date: "05-07-2008", quarter: "2008-Q2"
        },

        {
            event_name: "Myanmar Suffered Heavy Losses by Cyclone Nargis."
            , date: "05-05-2008", quarter: "2008-Q2"
        },

        {
            event_name: "Global Food Crisis, Rice Price Rising."
            , date: "04-26-2008", quarter: "2008-Q2"
        },

        {
            event_name: "Olympic Torch Relay Draws Protests Around the World."
            , date: "04-10-2008", quarter: "2008-Q2"
        },

        {
            event_name: "Iraqi Troops Attack Militants in Basra."
            , date: "03-30-2008", quarter: "2008-Q1"
        },

        {
            event_name: "China Cracks Down Protesting Tibetan Monks."
            , date: "03-12-2008", quarter: "2008-Q1"
        },

        {
            event_name: "Colombian troops Killed FARC Leader in Ecuador."
            , date: "03-07-2008", quarter: "2008-Q1"
        },

        {
            event_name: "Pakistan Musharraf Suffers Defeat in Elections and Step Down."
            , date: "02-21-2008", quarter: "2008-Q1"
        },

        {
            event_name: "Kosovo Declares Independence."
            , date: "02-18-2008", quarter: "2008-Q1"
        },

        {
            event_name: "Microsoft Makes Hostile Bid for Yahoo."
            , date: "01-25-2008", quarter: "2008-Q1"
        },

        {
            event_name: "Kenya Tribal Violence and Power-Sharing Deal."
            , date: "01-02-2008", quarter: "2008-Q1"
        },

        {
            event_name: "Terrorist attack on Detroit-bound plane failed."
            , date: "12-25-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Philippines Mayon volcano erupt."
            , date: "12-22-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Copenhagen climate summit."
            , date: "12-16-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Italian PM Silvio Berlusconis nose broken by protesters."
            , date: "12-13-2009", quarter: "2009-Q4"
        },

        {
            event_name: "North Korea and denuclearization."
            , date: "12-11-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Iraq Car Bomb kills over 100 in Baghdad."
            , date: "12-08-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Obama announces 30,000 more troops to Afganstan."
            , date: "12-01-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Global economy recovery."
            , date: "12-01-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Dubai debt crisis looms global economy."
            , date: "11-29-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Tiger Woods car crash scandal."
            , date: "11-28-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Shooting rampage at Texas army base Fort Hood leaves 13 dead, more injured."
            , date: "11-05-2009", quarter: "2009-Q4"
        },

        {
            event_name: "UN condemns US trade embargo against Cuba by overwhelming vote."
            , date: "10-28-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Car Bomb in Peshawar, Pakistan kills more than 100."
            , date: "10-28-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Two Car bombs rock Baghdad simultaneously, over one hundred killed."
            , date: "10-25-2009", quarter: "2009-Q4"
        },

        {
            event_name: "India train crash kills dozens, injures more."
            , date: "10-21-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Iran senior commanders killed in suicide bombing."
            , date: "10-18-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Pakistani forces launches massive ground offensive against Taliban in S Waziristan."
            , date: "10-16-2009", quarter: "2009-Q4"
        },

        {
            event_name: "North Korea fires missiles."
            , date: "10-12-2009", quarter: "2009-Q4"
        },

        {
            event_name: "India Tests nuclear-capable Prithvi-II missiles."
            , date: "10-12-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Tens of thousands rally in Washington D.C. for Gay Rights ."
            , date: "10-11-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Taliban militants attack Pakistan army headquarter."
            , date: "10-10-2009", quarter: "2009-Q4"
        },

        {
            event_name: "2009 Nobel Prize Winners."
            , date: "10-05-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Rio de Janeiro wins out 2016 Summer Olympic Games."
            , date: "10-02-2009", quarter: "2009-Q4"
        },

        {
            event_name: "Powful earthquake hit Sumatra, Indonesia."
            , date: "09-30-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Earthquake near Somoa causes tsunami."
            , date: "09-29-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Philippine flood kills hundred."
            , date: "09-28-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Pittsburgh G-20 Global Summit."
            , date: "09-24-2009", quarter: "2009-Q3"
        },

        {
            event_name: "UN 64th General Assembly."
            , date: "09-23-2009", quarter: "2009-Q3"
        },

        {
            event_name: "US new missile shield gives up Poland and Czech bases."
            , date: "09-19-2009", quarter: "2009-Q3"
        },

        {
            event_name: "US arrests terrorists, plot uncovered."
            , date: "09-18-2009", quarter: "2009-Q3"
        },

        {
            event_name: "US imposes 35% tariff on China tires."
            , date: "09-12-2009", quarter: "2009-Q3"
        },

        {
            event_name: "US congressman outburst \"You Lie\" during Obama speech in the congress."
            , date: "09-10-2009", quarter: "2009-Q3"
        },

        {
            event_name: "US Air Force strikes two hijacked oil tanks in Afghanistan, over 50 killed."
            , date: "09-04-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Guards of US embassy in Kabul nude party scandal."
            , date: "09-02-2009", quarter: "2009-Q3"
        },

        {
            event_name: "7.1 magnitude earthquake hits Java, Indonesia."
            , date: "09-02-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Japan election Democratic Party wins, the Liberal Democratic Party lost " +
            "power after 54 years."
            , date: "08-30-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Los Angeles wildfire forces thousands from homes."
            , date: "08-28-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Myanmar launch assault on rebel militias after 20 years peace treaty ."
            , date: "08-28-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Senator Edward Kennedy Dies at Age 77."
            , date: "08-25-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Australia and China in Diplomatic Crisis."
            , date: "08-23-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Greece Wild Fire Threaten Athens."
            , date: "08-22-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Afganistan Presidential Election."
            , date: "08-20-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Swiss to Reveal Some UBS Accounts."
            , date: "08-19-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Suicide Bomb in Bagdad Kills 95."
            , date: "08-19-2009", quarter: "2009-Q3"
        },

        {
            event_name: "US Senator Visits Burma, American Prisoner Released."
            , date: "08-16-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Kuwait Fire Kills 41."
            , date: "08-16-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Russian aerobatic planes collide, one dead."
            , date: "08-16-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Suicide Car Bomb Explodes in Kabul, Afganstan, Outside NATO HQ."
            , date: "08-15-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Obamas Health Care Push Faces Citizens Mounting Concern."
            , date: "08-11-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Typhoon Morakot Strikes Taiwan and Mainland China Causing Huge Damage."
            , date: "08-10-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Bill Clinton Visits North Korea, Two Jailed Journalists Released."
            , date: "08-04-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Sara Palin Leaves Office."
            , date: "07-26-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Computer Virus Zero Day Infects Millions of Computers."
            , date: "07-25-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Harvard Prof Henry Louis Gates Arrested at His Home by Police."
            , date: "07-20-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Iran Suffers Series Airplane Crashes."
            , date: "07-15-2009", quarter: "2009-Q3"
        },

        {
            event_name: "China Xinjiang Uighur Region Riot."
            , date: "07-05-2009", quarter: "2009-Q3"
        },

        {
            event_name: "North Korea Rocket Launch."
            , date: "07-04-2009", quarter: "2009-Q3"
        },

        {
            event_name: "Bernard Madoff Sentenced to 150 Years in Jail."
            , date: "06-29-2009", quarter: "2009-Q2"
        },

        {
            event_name: "U.S. Pull Out from Iraq Cities."
            , date: "06-29-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Yemen Airliner Crashes in Comoros, 150 Died."
            , date: "06-29-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Honduras Army Coup, President on Exile."
            , date: "06-28-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Michael Jackson Died at 50."
            , date: "06-25-2009", quarter: "2009-Q2"
        },

        {
            event_name: "U.S. Train Crash Kills 9."
            , date: "06-22-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Israel Propose Palestine Peace Plane."
            , date: "06-14-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Iran Presidential Election, Ahmadinejad Reelected."
            , date: "06-12-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Mexico Day-care Center Fire Kills 41 Children."
            , date: "06-06-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Obama Speech to Muslim World in Cairo."
            , date: "06-05-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Microsoft Launch Bing Search Engine."
            , date: "06-01-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Air France Flight 447 Missing, 228 on Board Dead."
            , date: "06-01-2009", quarter: "2009-Q2"
        },

        {
            event_name: "GM Files Bankruptcy."
            , date: "06-01-2009", quarter: "2009-Q2"
        },

        {
            event_name: "US Abortion Doctor Killed."
            , date: "05-31-2009", quarter: "2009-Q2"
        },

        {
            event_name: "California Ruling Upholds Gay Marriage Ban."
            , date: "05-26-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Pakistan Troops Fight Taliban in the Swat Valley."
            , date: "05-24-2009", quarter: "2009-Q2"
        },

        {
            event_name: "North Korea conducts nuclear test."
            , date: "05-24-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Sri Lanka Tamil Tigers Defeated."
            , date: "05-22-2009", quarter: "2009-Q2"
        },

        {
            event_name: "South Korea Former President Roh Moo-Hyun Suicided."
            , date: "05-22-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Fossil find may be monkey and human ancester."
            , date: "05-20-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Nepal Primer Minister Prachanda Resigned."
            , date: "05-04-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Swine Flu Threat."
            , date: "04-26-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Susan Boyle, British Got Talent Popular Through the Internet."
            , date: "04-17-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Thailand Protest Ended Violently."
            , date: "04-13-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Pirates Threat."
            , date: "04-11-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Italy Earthquake Kill Hundreds."
            , date: "04-06-2009", quarter: "2009-Q2"
        },

        {
            event_name: "North Korea Rocket Launch."
            , date: "04-05-2009", quarter: "2009-Q2"
        },

        {
            event_name: "U.S. Series Gunshot."
            , date: "04-03-2009", quarter: "2009-Q2"
        },

        {
            event_name: "Madagascar Political Crisis."
            , date: "03-15-2009", quarter: "2009-Q1"
        },

        {
            event_name: "Australia Bushfire Kills 183."
            , date: "02-10-2009", quarter: "2009-Q1"
        },

        {
            event_name: "Guantanamo Prison Closure."
            , date: "01-02-2009", quarter: "2009-Q1"
        },

        {
            event_name: "Mexico Drug War."
            , date: "01-01-2009", quarter: "2009-Q1"
        },

        {
            event_name: "Global Financial Crisis."
            , date: "01-01-2009", quarter: "2009-Q1"
        },

        {
            event_name: "Israel Invade Gaza."
            , date: "01-01-2009", quarter: "2009-Q1"
        },

        {
            event_name: "Arrest of WikiLeaks founder Julian Assange sparks web war."
            , date: "12-07-2010", quarter: "2010-Q4"
        },

        {
            event_name: "Russia three navigational satellites launch failed."
            , date: "12-05-2010", quarter: "2010-Q4"
        },

        {
            event_name: "China leads the world in high-speed trains."
            , date: "12-05-2010", quarter: "2010-Q4"
        },

        {
            event_name: "2010 Nobel Prize Winners."
            , date: "09-05-2010", quarter: "2010-Q3"
        },

        {
            event_name: "France expel Roma(Gypsy)."
            , date: "08-26-2010", quarter: "2010-Q3"
        },

        {
            event_name: "Chile miners miraclely rescued after trapped 69 days in a mining accident."
            , date: "08-18-2010", quarter: "2010-Q3"
        },

        {
            event_name: "Thailand army crackdown the red shirt demonstrators, many dead."
            , date: "05-14-2010", quarter: "2010-Q2"
        },

        {
            event_name: "US drilling rig explosion, spilling large amount of oil to the Gulf of Mexico."
            , date: "04-20-2010", quarter: "2010-Q2"
        },

        {
            event_name: "Thoudands die in China earthquake scaled 7.1."
            , date: "04-15-2010", quarter: "2010-Q2"
        },

        {
            event_name: "Iceland volcano erupts, European airports closed to spreading ash."
            , date: "04-15-2010", quarter: "2010-Q2"
        },

        {
            event_name: "Polish president, and key government leaders killed in plane crash in Russia."
            , date: "04-10-2010", quarter: "2010-Q2"
        },

        {
            event_name: "Kyrgyzstan chaos, government dissolved."
            , date: "04-07-2010", quarter: "2010-Q2"
        },

        {
            event_name: "Fools Day BIG News."
            , date: "04-01-2010", quarter: "2010-Q2"
        },

        {
            event_name: "Russia suffered from several suicide bombs."
            , date: "03-29-2010", quarter: "2010-Q1"
        },

        {
            event_name: "Greece debt crisis."
            , date: "03-02-2010", quarter: "2010-Q1"
        },

        {
            event_name: "Chile suffered scale 8.8 earthquake."
            , date: "02-28-2010", quarter: "2010-Q1"
        },

        {
            event_name: "NATO, Afghan forces launch major offensives on Taliban Strongholds."
            , date: "02-12-2010", quarter: "2010-Q1"
        },

        {
            event_name: "Toyota recall millions vehicles to fix gas pedals."
            , date: "01-21-2010", quarter: "2010-Q1"
        },

        {
            event_name: "Nigeria Muslim-Christian clashes sets off deadly riot."
            , date: "01-18-2010", quarter: "2010-Q1"
        },

        {
            event_name: "Google under attack and threaten quit China."
            , date: "01-13-2010", quarter: "2010-Q1"
        },

        {
            event_name: "Haiti rocked by scale 7.0 earthquake."
            , date: "01-12-2010", quarter: "2010-Q1"
        },

        {
            event_name: "Wave of Bombings kills more than 60 in Iraq."
            , date: "12-21-2011", quarter: "2011-Q4"
        },

        {
            event_name: "North Korean Leader Kim Jong II died."
            , date: "12-18-2011", quarter: "2011-Q4"
        },

        {
            event_name: "U.S. military formally ends mission in Iraq."
            , date: "12-14-2011", quarter: "2011-Q4"
        },

        {
            event_name: "US drone lost in Iran."
            , date: "12-07-2011", quarter: "2011-Q4"
        },

        {
            event_name: "Greece PM resigns over debt crisis."
            , date: "11-05-2011", quarter: "2011-Q4"
        },

        {
            event_name: "7.2-mag earthquake strikes Turkey, hundreds dead."
            , date: "10-23-2011", quarter: "2011-Q4"
        },

        {
            event_name: "Apple CEO Steve Jobs Passed Away."
            , date: "10-05-2011", quarter: "2011-Q4"
        },

        {
            event_name: "Occupy Wall Street Demonstration in US."
            , date: "09-14-2011", quarter: "2011-Q3"
        },

        {
            event_name: "Obama propose $447 bn jobs plan."
            , date: "09-07-2011", quarter: "2011-Q3"
        },

        {
            event_name: "Slaughter in Norway ."
            , date: "07-22-2011", quarter: "2011-Q3"
        },

        {
            event_name: "Mumbai rocked by 3 blasts, at least 20 dead."
            , date: "07-12-2011", quarter: "2011-Q3"
        },

        {
            event_name: "South Sudan declares independence."
            , date: "07-09-2011", quarter: "2011-Q3"
        },

        {
            event_name: "News reporter hacking scandal shocked UK."
            , date: "06-09-2011", quarter: "2011-Q2"
        },

        {
            event_name: "Osama bin Laden killed."
            , date: "05-01-2011", quarter: "2011-Q2"
        },

        {
            event_name: "Earthquake scaling 8.9 caused tsunami destructed Japan."
            , date: "03-10-2011", quarter: "2011-Q1"
        },

        {
            event_name: "Syria massive bloody protest."
            , date: "03-01-2011", quarter: "2011-Q1"
        },

        {
            event_name: "Libyan uprising leads to civil war."
            , date: "02-25-2011", quarter: "2011-Q1"
        },

        {
            event_name: "Egyptian President Mubarak resigned after protests."
            , date: "01-16-2011", quarter: "2011-Q1"
        },

        {
            event_name: "Terrorist bombing at Moscow airport, more than 30 died."
            , date: "01-15-2011", quarter: "2011-Q1"
        },

        {
            event_name: "Tunis revolt, government collapsed."
            , date: "01-05-2011", quarter: "2011-Q1"
        },

        {
            event_name: "Gunman assaults Conn. elementary school, 27 dead."
            , date: "12-13-2012", quarter: "2012-Q4"
        },

        {
            event_name: "N Korea Launched Long Range Rocket."
            , date: "12-11-2012", quarter: "2012-Q4"
        },

        {
            event_name: "Conflict between Israel and Gaza reignited."
            , date: "11-11-2012", quarter: "2012-Q4"
        },

        {
            event_name: "Obama Reelected Second Term as US President."
            , date: "11-05-2012", quarter: "2012-Q4"
        },

        {
            event_name: "US Ambassador Killed in Libya."
            , date: "09-11-2012", quarter: "2012-Q3"
        },

        {
            event_name: "Rover Curiosity lands on Mars successfully."
            , date: "08-01-2012", quarter: "2012-Q3"
        },

        {
            event_name: "Lodon Olympic Games 2012."
            , date: "07-27-2012", quarter: "2012-Q3"
        },

        {
            event_name: "Gunman kills 14 at Batman Premiere in Denver."
            , date: "07-19-2012", quarter: "2012-Q3"
        },

        {
            event_name: "Syria shot down Turkey Warplane."
            , date: "06-23-2012", quarter: "2012-Q2"
        },

        {
            event_name: "Spain Accepts 100 Billion Euro Bailout Deal."
            , date: "06-08-2012", quarter: "2012-Q2"
        },

        {
            event_name: "Vladimir Putin Elected as Russia President."
            , date: "03-02-2012", quarter: "2012-Q1"
        },

        {
            event_name: "Quran burning incites deadly riots in Afghanistan."
            , date: "02-20-2012", quarter: "2012-Q1"
        },

        {
            event_name: "Honduras prison fire kills over 300 inmates."
            , date: "02-15-2012", quarter: "2012-Q1"
        },

        {
            event_name: "Whitney Houston passed away at 48."
            , date: "02-11-2012", quarter: "2012-Q1"
        },

        {
            event_name: "Facebook IPO."
            , date: "02-03-2012", quarter: "2012-Q1"
        },

        {
            event_name: "Yahoo co-founder Jerry Yang resigns."
            , date: "01-17-2012", quarter: "2012-Q1"
        },

        {
            event_name: "Luxury cruise ship runs aground in Italy, many dead."
            , date: "01-13-2012", quarter: "2012-Q1"
        },

        {
            event_name: "Iran under International Oil Embargo."
            , date: "01-10-2012", quarter: "2012-Q1"
        },

        {
            event_name: "China Moon Rover Lands on Moon."
            , date: "12-10-2013", quarter: "2013-Q4"
        },

        {
            event_name: "Nelson Mandela Dies at 95."
            , date: "12-04-2013", quarter: "2013-Q4"
        },

        {
            event_name: "Iran Nuclear Deal."
            , date: "11-22-2013", quarter: "2013-Q4"
        },

        {
            event_name: "Super Typhoon Haiyan Davastates Philippines."
            , date: "11-07-2013", quarter: "2013-Q4"
        },

        {
            event_name: "US government shutdown."
            , date: "10-01-2013", quarter: "2013-Q4"
        },

        {
            event_name: "Kenya Mall Attack."
            , date: "09-21-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Washington DC Navy Yard Shooting."
            , date: "09-17-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Tokyo Japan wins to host 2020 Olympics."
            , date: "09-07-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Microsoft buys Nokia mobile phone business at $7.2 billiion."
            , date: "09-02-2013", quarter: "2013-Q3"
        },

        {
            event_name: "NASDAQ in error for three hours during trading time."
            , date: "08-21-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Syria Chemical Attack Allegation."
            , date: "08-21-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Spain train crash."
            , date: "07-25-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Detroit files for bankruptcy."
            , date: "07-18-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Boeing 777 Crashes at San Francisco Airport."
            , date: "07-06-2013", quarter: "2013-Q3"
        },

        {
            event_name: "Egypt Army Ousts President Mursi."
            , date: "06-22-2013", quarter: "2013-Q2"
        },

        {
            event_name: "US NSA Prism Program."
            , date: "06-06-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Baltimore cruise ship fire in Caribbean."
            , date: "05-27-2013", quarter: "2013-Q2"
        },

        {
            event_name: "London shocked after brutal machete attack."
            , date: "05-22-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Huge tornado hits Oklahoma."
            , date: "05-20-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Scientists successfully cloned human stem cells."
            , date: "05-17-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Yahoo buy Tumblr for $1.1 billion."
            , date: "05-17-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Bangladesh Factory Collapse, Over 700 Dead."
            , date: "05-05-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Deadly earthquake hits China Sichuan."
            , date: "04-18-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Boston Marathon Blasts ."
            , date: "04-16-2013", quarter: "2013-Q2"
        },

        {
            event_name: "Margaret Thatcher Dies at 87."
            , date: "04-07-2013", quarter: "2013-Q2"
        },

        {
            event_name: "The rise of bitcoin."
            , date: "03-20-2013", quarter: "2013-Q1"
        },

        {
            event_name: "Cyprus plans to tax bank deposits."
            , date: "03-17-2013", quarter: "2013-Q1"
        },

        {
            event_name: "Meteorites injured hundreds in Russia."
            , date: "02-14-2013", quarter: "2013-Q1"
        },

        {
            event_name: "Pope Benedict XVI resigned."
            , date: "02-10-2013", quarter: "2013-Q1"
        },

        {
            event_name: "About 230 Dead During Brazil Nightclub Fire."
            , date: "01-27-2013", quarter: "2013-Q1"
        },

        {
            event_name: "Algeria Hostage Crisis."
            , date: "01-16-2013", quarter: "2013-Q1"
        },

        {
            event_name: "Stampede During New Year Fireworks in Ivory Coast."
            , date: "01-01-2013", quarter: "2013-Q1"
        }];
    return events;
}