import os

import pandas as pd


def qrt(now):
    first_qrt = now.month < 4
    return now.year - first_qrt, (now.month - 1) // 3 if not first_qrt else 4


def qrt_string(now):
    return "%s-Q%s" % qrt(now)


current_path = os.path.dirname(os.path.realpath(__file__))
# LoanOriginationDate #LoanOriginalAmount
data_path = '/Users/montionugera/WorkSpace/Udemy-Datascience/EDV-Laon/data/'
origin_file_name = 'prosperLoanData.csv'




origin_file_path = os.path.join(data_path, origin_file_name)

ListingCateDict = {0: 'Not Available', 1: 'Debt Consolidation', 2: 'Home Improvement', 3: 'Business',
                   4: 'Personal Loan', 5: 'Student Use', 6: 'Auto', 7: 'Other', 8: 'Baby&Adoption', 9: 'Boat',
                   10: 'Cosmetic Procedure', 11: 'Engagement Ring', 12: 'Green Loans', 13: 'Household Expenses',
                   14: 'Large Purchases', 15: 'Medical/Dental', 16: 'Motorcycle', 17: 'RV', 18: 'Taxes', 19: 'Vacation',
                   20: 'Wedding Loans'}


def custom_process_file(origin_file_path):
    sumloan_by_map = 'sumloan_by_map.csv'
    sumloan_by_cate = 'sumloan_by_cate.csv'
    br_by_cg = 'br_by_cg.csv'
    br_by_pr = 'br_by_pr.csv'
    df = pd.read_csv(origin_file_path)
    df['loan_dttm'] = pd.to_datetime(df['LoanOriginationDate'], format='%Y-%m-%d %H:%M:%S')
    df['Loan Date Quarter'] = df['loan_dttm'].apply(lambda x: qrt_string(x))
    df['Cate'] = df['ListingCategory (numeric)'].apply(lambda x: ListingCateDict[x])
    df['LoanAmount']= df['LoanOriginalAmount']
    df['ProsperRating']= df['ProsperRating (Alpha)']

    agg = df.groupby(by=['Loan Date Quarter', 'Cate'], as_index=False).sum()
    agg = agg[['Loan Date Quarter', 'Cate', 'LoanAmount']]
    file_path = os.path.join(data_path, sumloan_by_cate)
    agg.to_csv(file_path, sep=',', index=False)

    agg = df.groupby(by=['Loan Date Quarter', 'BorrowerState'], as_index=False).sum()
    agg = agg[['Loan Date Quarter', 'BorrowerState', 'LoanAmount']]
    file_path = os.path.join(data_path, sumloan_by_map)
    agg.to_csv(file_path, sep=',', index=False)

    agg_025 = df.groupby(by=['Loan Date Quarter', 'CreditGrade'], as_index=True).quantile(.025)
    agg_975 = df.groupby(by=['Loan Date Quarter', 'CreditGrade'], as_index=True).quantile(.975)
    agg_5 = df.groupby(by=['Loan Date Quarter', 'CreditGrade'], as_index=True).quantile(.5)
    agg_med = df.groupby(by=['Loan Date Quarter', 'CreditGrade'], as_index=True).median()
    agg = agg_med[[ 'BorrowerRate']]
    agg['BorrowerRate_025'] = agg_025[['BorrowerRate']]['BorrowerRate']
    agg['BorrowerRate_975'] = agg_975[['BorrowerRate']]['BorrowerRate']
    file_path = os.path.join(data_path, br_by_cg)
    agg.to_csv(file_path, sep=',', index=True)

    agg = df.groupby(by=['Loan Date Quarter', 'ProsperRating'], as_index=False).sum()
    agg = agg[['Loan Date Quarter', 'ProsperRating', 'BorrowerRate']]
    file_path = os.path.join(data_path, br_by_pr)
    agg.to_csv(file_path, sep=',', index=False)


custom_process_file(origin_file_path)
